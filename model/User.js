import mongoose from 'mongoose';

const UserSchema= new mongoose.Schema({
Firstname: { type: String, required: true, },
 Lastname: { type: String, required: true, },
 Middlename:{ type: String, required: true, },
 School: { type: String, required: true, },
 Email: { type: String, required: true, unique: true},
 Password: {type: String,  required: true,},
 role: {type: String, defaultValue: "USER"},


 Olympiads: [{
  Id: { type: mongoose.Schema.Types.ObjectId },
  result: {type: String},
  date: {type: Date},
}],
 Tasks: [{
  Id: { type: mongoose.Schema.Types.ObjectId },
  status: {type: String},
  proc_resh: {type: Number},
  date: {type: Date},
}],
 Kurs: [{
  Id: { type: mongoose.Schema.Types.ObjectId },
  proc: {type: Number},
  date: {type: Date},
}],
 Bans: [{
  Id: { type: mongoose.Schema.Types.ObjectId },
}],
 History_Bans: [{
  Id: { type: mongoose.Schema.Types.ObjectId },
}],
   }, {
    timestamps: true
})

export default mongoose.model('User', UserSchema);



