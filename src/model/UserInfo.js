const { model, models, Schema } = require("mongoose");

const userInfoSchema = new  Schema({
    email:{
        type: String,
        required: true,
        unique: true,
    },
    phone:{
        type: String,
    },
    streetAddress:{
        type: String,
    },
    pinCode:{
        type: String,
    },
    city:{
        type: String,
    },
    country:{
        type: String,
    },
    admin:{
        type:Boolean,
        default:false,
    }
},{timestamps:true});


export const UserInfo = models?.UserInfo || model("UserInfo", userInfoSchema);  