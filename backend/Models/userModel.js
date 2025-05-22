const mongoose=require('mongoose');
const validation=require('email-validator');
const bcrypt=require('bcrypt');
const { default: parsePhoneNumberFromString } = require('libphonenumber-js');
const dblink=process.env.MONGODB_URI;

const dbConnect= mongoose.connect(dblink)

.then(()=>
    console.log("db connected")
)
.catch((err)=>
    console.log(err)
)

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        validate:function(){
            return validation.validate(this.email);
        }
    },
    number:{
        type:String,
        required: true,
        unique:true,
        validate:{
            validator: function(v){
                const phoneNum=parsePhoneNumberFromString(v,'IN');
                if(!phoneNum || !phoneNum.isValid()){
                    return false;
                }
                return true;
            },
            message : props=>`${props.value} is not a valid phone number.`
        }
    },

    password:{
        type:String,
        required:true,
        minLength:8,
        select: false
    },
    confirm_password:{
        type:String,
        required:true,
        minLength:8,
        select:false,
        validate:function(){
            return this.password==this.confirm_password;
        },
        message:'Password do not match'
    }
})

userSchema.pre('save', function(next){
    if(this.isModified('password') || this.confirm_password!==undefined){
        this.confirmPassword=undefined;
    }
    next();
})

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    try {
        const salt =await bcrypt.genSalt();
        this.password = await bcrypt.hash(this.password, salt);

        this.set('confirm_password',undefined);
        
        next();
    } catch (err) {
        next(err);
    }
});

const userModel=mongoose.model('userModel', userSchema);
module.exports=userModel,dbConnect;