import mongoose from 'mongoose';

const AnswerSchema= new mongoose.Schema({
Name: { type: String, required: true, unique: true },
ForumId: {type: String},
AuthorId: {type: String},
Kateg:{ type: String, required: true, },
Answer:{ type: String, required: true, },
Like:{ type: String, required: true, },
DisLike:{ type: String, required: true, },
   }, {
    timestamps: true
})

export default mongoose.model('Answer', AnswerSchema);