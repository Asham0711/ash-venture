/* eslint-disable @typescript-eslint/no-unused-vars */
import connectDB from "@/lib/database";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { AuthOptions } from "../../auth/[...nextauth]/options";
import mongoose from "mongoose";
import User from "@/models/user.model";
import Trip from "@/models/trip.model";

export async function DELETE(request: NextRequest){
    await connectDB();
    const session = await getServerSession(AuthOptions);
    const _user = session?.user;

    if (!session || !_user) {
        return NextResponse.json(
            { success: false, message: 'Not authenticated' },
            { status: 401 }
        );
    }
    const userId = new mongoose.Types.ObjectId(_user._id);

    try {
        const user = await User.findById(userId);
        if(!user){
            return NextResponse.json(
                { success: false, message: 'User not found' },
                { status: 404 }
            );
        }

        const userTrips = await Trip.deleteMany({ _id: { $in: user.trips } });

        await User.findByIdAndDelete(userId);

        return NextResponse.json(
            {success: true, message: 'User deleted successfully', details: { tripsDeleted: userTrips.deletedCount }},
            {status: 200}
        )


    } catch (error) {
        console.log("Error while deleting account --> ", error);
        return NextResponse.json(
            {
                success:false,
                message:"Error while deleting account"
            },
            {status:500}
        )
    }
}