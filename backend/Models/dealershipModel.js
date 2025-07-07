const mongoose=require('mongoose');
const dealershipSchema=new mongoose.Schema({
    fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true,
    maxlength: [100, 'Full name cannot exceed 100 characters']
  },
  phoneNumber: {
    type: String,
    required: [true, 'Phone number is required'],
    match: [/^\d{10}$/, 'Phone number must be 10 digits'],
    unique: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
    lowercase: true,
    trim: true
  },
  age: {
    type: Number,
    required: [true, 'Age is required'],
    min: [18, 'Age must be at least 18'],
    max: [100, 'Age cannot exceed 100']
  },
  
  businessType: {
    type: String,
    required: [true, 'Business type is required'],
    enum: ['proprietorship', 'partnership', 'private_limited', 'llp']
  },
  businessName: {
    type: String,
    trim: true,
    maxlength: [200, 'Business name cannot exceed 200 characters']
  },
  gstNumber: {
    type: String,
    trim: true,
    match: [/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/, 'Invalid GST number format']
  },
  hasExperience: {
    type: String,
    required: [true, 'Experience field is required'],
    enum: ['yes', 'no']
  },
  experienceDetails: {
    type: String,
    trim: true,
    maxlength: [1000, 'Experience details cannot exceed 1000 characters']
  },

  city: {
    type: String,
    required: [true, 'City is required'],
    trim: true,
    maxlength: [100, 'City name cannot exceed 100 characters']
  },
  state: {
    type: String,
    required: [true, 'State is required'],
    enum: [
      'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana',
      'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
      'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
      'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
    ]
  },
  pincode: {
    type: String,
    required: [true, 'Pincode is required'],
    match: [/^\d{6}$/, 'Pincode must be 6 digits']
  },
  areaType: {
    type: String,
    required: [true, 'Area type is required'],
    enum: ['tier1', 'tier2', 'tier3']
  },
  dealershipAddress: {
    type: String,
    required: [true, 'Dealership address is required'],
    trim: true,
    maxlength: [500, 'Address cannot exceed 500 characters']
  },
  propertyStatus: {
    type: String,
    required: [true, 'Property status is required'],
    enum: ['owned', 'rented', 'lease']
  },
  
  showroomSize: {
    type: Number,
    required: [true, 'Showroom size is required'],
    min: [100, 'Showroom size must be at least 100 sq ft']
  },
  hasServiceArea: {
    type: String,
    required: [true, 'Service area field is required'],
    enum: ['yes', 'no']
  },
  hasParkingSpace: {
    type: String,
    required: [true, 'Parking space field is required'],
    enum: ['yes', 'no']
  },
  hasPowerBackup: {
    type: String,
    required: [true, 'Power backup field is required'],
    enum: ['yes', 'no']
  },
  hasChargingStation: {
    type: String,
    required: [true, 'Charging station field is required'],
    enum: ['yes', 'no']
  },
  
  investmentCapacity: {
    type: String,
    required: [true, 'Investment capacity is required'],
    enum: ['5-10', '10-20', '20-50', '50-100', '100+']
  },
  investmentSource: {
    type: String,
    required: [true, 'Investment source is required'],
    enum: ['self', 'bank_loan', 'investor', 'mixed']
  },
  meetTargets: {
    type: String,
    required: [true, 'Meet targets field is required'],
    enum: ['yes', 'no']
  },
  
  salesExecutives: {
    type: Number,
    required: [true, 'Number of sales executives is required'],
    min: [1, 'At least 1 sales executive is required']
  },
  technicians: {
    type: Number,
    required: [true, 'Number of technicians is required'],
    min: [1, 'At least 1 technician is required']
  },
  trainStaff: {
    type: String,
    required: [true, 'Train staff field is required'],
    enum: ['yes', 'no']
  },
  
  motivation: {
    type: String,
    required: [true, 'Motivation is required'],
    trim: true,
    maxlength: [500, 'Motivation cannot exceed 500 characters']
  },
  exclusivity: {
    type: String,
    required: [true, 'Exclusivity field is required'],
    enum: ['yes', 'no']
  },
  
  documents: {
    idProof: {
      filename: String,
      path: String,
      mimetype: String,
      size: Number
    },
    addressProof: {
      filename: String,
      path: String,
      mimetype: String,
      size: Number
    },
    businessProof: {
      filename: String,
      path: String,
      mimetype: String,
      size: Number
    },
    propertyLayout: {
      filename: String,
      path: String,
      mimetype: String,
      size: Number
    }
  },
  declaration:{
    type:Boolean,
    required:[true, 'Please accept the declaration']
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('DealershipApplication', dealershipSchema);