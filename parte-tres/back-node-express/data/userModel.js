import mongoose, { model } from "mongoose";

const userSchema = mongoose.Schema({
    username: String,
    password: { type: String, required: true, select: true },
    notes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Note'
    }]
})
userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
        delete returnedObject.password
    }
})

const User = model('User', userSchema);


export default User;