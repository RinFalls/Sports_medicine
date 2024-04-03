import mongoose from 'mongoose';

const TasksSchema= new mongoose.Schema({
Name: { type: String, required: true, unique: true },
AuthorId: {type: String},
 Kateg: { type: String, required: true, defaultValue: "Tasks"},
 Opis:{ type: String, required: true, },
 Thema: { type: String, required: true, },
 Complexity: { type: String, required: true, },
   }, {
    timestamps: true
})

export default mongoose.model('Tasks', TasksSchema);