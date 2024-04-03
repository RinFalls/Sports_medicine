import mongoose from 'mongoose';

const KursSchema= new mongoose.Schema({
Name: { type: String, required: true, unique: true },
AuthorId: {type: String},
 Kateg: { type: String, required: true, defaultValue: "Olimpiade"},
 Opis:{ type: String, required: true, },
 DateStart: { type: String, required: true, },
 DateEnd: { type: String, required: true, },
   }, {
    timestamps: true
})

export default mongoose.model('Olimpiade', KursSchema);