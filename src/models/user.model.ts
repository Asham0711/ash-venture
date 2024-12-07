import mongoose, { Schema, Document } from 'mongoose'

interface IUser extends Document{
    name: string;
    email: string;
    password: string;
    phone: string;
    profilePicture: string;
    trips: mongoose.Types.ObjectId;
    googleId?: string;
}

const UserSchema : Schema<IUser> = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    phone: { type: String },
    profilePicture: { type: String },
    trips: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Trip' }],
    googleId: { type: String, unique: true, sparse: true }, // Google OAuth ID
},{
    timestamps:true
})

const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;