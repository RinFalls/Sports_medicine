import mongoose from 'mongoose';

const UserSchema= new mongoose.Schema({
Firstname: { type: String, required: true, },
 Lastname: { type: String, required: true, },
 Middlename:{ type: String, required: true, },
 School: { type: String, required: true, },
 Email: { type: String, required: true, unique: true},
 Password: {type: String,  required: true,},
 role: {type: String, defaultValue: "USER"},
   }, {
    timestamps: true
})

export default mongoose.model('User', UserSchema);



