import { Itinerary } from "./itinerary.model";

export interface Travel {
    id: number;
    travelGoalName : string;
    location : string;
    departureDate : Date;
    departureTime: string;
    returnDate: Date;
    returnTime: string;
    organizer: string;
    status: string;
    requiredTravelers: number;
    travelersJoined: number;
    isActive: boolean;
    imagePath: string;
    itinerary: Itinerary[];
}