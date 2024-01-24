const { model, models, Schema } = require("mongoose");
const userSchema = new  Schema({
    name: {
        type: String,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
    },
},{timestamps:true});


export const User = models?.User || model("User", userSchema);  