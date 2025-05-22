const express=require('express');
const userRouter=express.Router();

userRouter
.route('/')
// .get(getUser)
// .post(postUser)
// .delete(deleteUser)
// .patch(patchUser)


userRouter
.route('/getCookies')
// .get(getCookies)

userRouter
.route('/setCookies')
// .get(setCookies)

module.exports=userRouter;