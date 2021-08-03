import { Activity } from "./activity.model";

export interface Itinerary {
    activityDate: Date;
    activities: Activity[];
}