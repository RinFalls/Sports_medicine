import mongoose from 'mongoose';

const KursSchema= new mongoose.Schema({
Name: { type: String, required: true, unique: true },
AuthorId: {type: String},
 Kateg: { type: String, required: true, defaultValue: "Kurs"},
 Opis:{ type: String, required: true, },
 Time: { type: String, required: true, },
   }, {
    timestamps: true
})

export default mongoose.model('Kurs', KursSchema);