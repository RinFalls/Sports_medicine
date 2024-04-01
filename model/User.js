import mongoose from 'mongoose';

const UserSchema= new mongoose.Schema({
Firstname: { type: String, required: true, },
 Lastname: { type: String, required: true, },
 Middlename:{ type: String, required: true, },
 School: { type: String, required: true, },
 Email: { type: String, required: true,},
 Password: {type: String, unique: true, required: true,},
 role: {type: String, defaultValue: "USER"},
   }, {
    timestamps: true
    
})

export default mongoose.model('User', UserSchema);



