import mongoose, { Schema, Document } from 'mongoose'

interface Weather{
    temperature: string;
    description: string;
}

interface Activity{
    day: number;
    date: Date;
    activities: string[];
    weather: Weather;
}

interface Hotel{
    name: string;
    rating: number;
    price: string;
}

export interface ITrip extends Document{
    user: mongoose.Types.ObjectId;
    destination: string;
    numDays: number;
    numPeople: number;
    budget: 'low' | 'medium' | 'high';
    itinerary: Activity[];
    budgetHotels: Hotel[];
    createdAt: Date;
    updatedAt: Date;
}

const WeatherSchema : Schema<Weather> = new mongoose.Schema({
    temperature: { type: String, required: true },
    description: { type: String, required: true }
});

const ActivitySchema : Schema<Activity> = new mongoose.Schema({
    day: { type: Number, required: true },
    date: { type: Date, required: true },
    activities: { type: [String], required: true },
    weather: { type: WeatherSchema, required: true }
});

const HotelSchema : Schema<Hotel> = new mongoose.Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    price: { type: String, required: true }
})

const TripSchema : Schema<ITrip> = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    destination: { type: String, required: true },
    numDays: { type: Number, required: true },
    numPeople: { type: Number, required: true },
    budget: { type: String, enum:['low','medium','high'], required: true },
    itinerary: [ActivitySchema],
    budgetHotels: [HotelSchema],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Trip = mongoose.models.Trip || mongoose.model<ITrip>("Trip", TripSchema);

export default Trip;