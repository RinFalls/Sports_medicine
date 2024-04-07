import mongoose from 'mongoose';

const ForumSchema= new mongoose.Schema({
Name: { type: String, required: true, unique: true },
AuthorId: {type: String},
Thema:{ type: String, required: true, },
 Kateg: { type: String, required: true, defaultValue: "Forum"},
 Opis:{ type: String, required: true, },
   }, {
    timestamps: true
})

export default mongoose.model('Forum', ForumSchema);