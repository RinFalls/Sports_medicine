import mongoose from 'mongoose';

const BanSchema= new mongoose.Schema({
Name: { type: String, required: true, unique: true },
AdminId: {type: String},
ClientId: {type: String},
ViolationId: {type: String},
Reason:{ type: String, required: true, },
 Kateg_Ban: { type: String, required: true},
 Date_start:{ type: String, required: true, },
 Date_end:{ type: String, required: true, },
   }, {
    timestamps: true
})

export default mongoose.model('Ban', BanSchema);