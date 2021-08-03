import { Travel } from "./travel.model";

export const TravelList: Travel[] = [
    {
        id: 1,
        travelGoalName: "21 Red Balloons",
        location: "Cappadocia, Turkey",
        departureDate: new Date("2021-01-04T16:09:00.000Z"),
        departureTime: "09:00",
        returnDate: new Date("2021-01-10T16:00:00.000Z"),
        returnTime: "18:00",
        organizer: "Mary Knoll",
        status: "Draft",
        requiredTravelers: 10,
        travelersJoined: 3,
        isActive: false,
        imagePath: "../../../assets/img/img1.png",
        itinerary: [
            {
                activityDate: new Date("2021-01-04T16:00:00.000Z"),
                activities: [
                    {
                        time: "10:00",
                        title: "Hot Air Balloons Watching",
                        description: "Lorem ipsum dolor sit amet"
                    },
                    {
                        time: "13:00",
                        title: "Turkish Lunch",
                        description: "Lorem ipsum dolor sit amet"
                    }
                ]
            },
            {
                activityDate: new Date("2021-01-05T16:00:00.000Z"),
                activities: [
                    {
                        time: "10:00",
                        title: "National Meseum",
                        description: "Lorem ipsum dolor sit amet"
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        travelGoalName: "Golden Triangle",
        location: "Thailand",
        departureDate: new Date("2021-02-05T16:00:00.000Z"),
        departureTime: "09:00",
        returnDate: new Date("2021-02-15T16:00:00.000Z"),
        returnTime: "20:30",
        organizer: "John Doe",
        status: "Pending",
        requiredTravelers: 10,
        travelersJoined: 3,
        isActive: false,
        imagePath: "../../../assets/img/img1.png",
        itinerary: [
            {
                activityDate: new Date("2021-02-05T16:00:00.000Z"),
                activities: [
                    {
                        time: "09:00",
                        title: "Arrival at Bangkok",
                        description: "Lorem ipsum dolor sit amet"
                    },
                    {
                        time: "10:30",
                        title: "Departure to Golden Triangle",
                        description: "Lorem ipsum dolor sit amet"
                    },
                    {
                        time: "14:00",
                        title: "Checkin at Hotel",
                        description: "Lorem ipsum dolor sit amet"
                    }
                ]
            },
            {
                activityDate: new Date("2021-02-05T16:00:00.000Z"),
                activities: [
                    {
                        time: "07:00",
                        title: "Breakfast",
                        description: "Lorem ipsum dolor sit amet"
                    },
                    {
                        time: "08:00",
                        title: "Prepare",
                        description: "Lorem ipsum dolor sit amet"
                    },
                    {
                        time: "10:00",
                        title: "Golden Triangle Tour",
                        description: "Lorem ipsum dolor sit amet"
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        travelGoalName: "Way of the Bushido",
        location: "Kyoto, Japan",
        departureDate: new Date("2021-01-15T16:00:00.000Z"),
        departureTime: "09:00",
        returnDate: new Date("2021-01-25T16:00:00.000Z"),
        returnTime: "17:00",
        organizer: "Yamato Genji",
        status: "Pending",
        requiredTravelers: 10,
        travelersJoined: 3,
        isActive: false,
        imagePath: "../../../assets/img/img1.png",
        itinerary: [            
        ]
    },
    {
        id: 4,
        travelGoalName: "3 Kingdoms",
        location: "Beijing, China",
        departureDate: new Date("2020-11-16T16:00:00.000Z"),
        departureTime: "09:00",
        returnDate: new Date("2020-11-25T16:00:00.000Z"),
        returnTime: "18:45",
        organizer: "Chun Li",
        status: "Ongoing",
        requiredTravelers: 10,
        travelersJoined: 10,
        isActive: false,
        imagePath: "../../../assets/img/img1.png",
        itinerary: [
        ]
    },
    {
        id: 5,
        travelGoalName: "Iron Curtain",
        location: "Pyongyan, North Korea",
        departureDate: new Date("2021-05-09T16:00:00.000Z"),
        departureTime: "08:30",
        returnDate: new Date("2021-05-25T16:00:00.000Z"),
        returnTime: "19:30",
        organizer: "Hanna Kim",
        status: "Cancelled",
        requiredTravelers: 10,
        travelersJoined: 0,
        isActive: false,
        imagePath: "../../../assets/img/img1.png",
        itinerary: [
        ]
    },
    {
        id: 6,
        travelGoalName: "Oppa",
        location: "Seoul, South Korea",
        departureDate: new Date("2021-09-09T16:00:00.000Z"),
        departureTime: "06:30",
        returnDate: new Date("2021-09-25T16:00:00.000Z"),
        returnTime: "18:30",
        organizer: "Hanna Kim",
        status: "Pending",
        requiredTravelers: 10,
        travelersJoined: 10,
        isActive: false,
        imagePath: "../../../assets/img/img1.png",
        itinerary: [
        ]
    },
    {
        id: 7,
        travelGoalName: "Stars and Stripes",
        location: "United States",
        departureDate: new Date("2021-05-09T16:00:00.000Z"),
        departureTime: "9:00",
        returnDate: new Date("2021-09-25T16:00:00.000Z"),
        returnTime: "17:00",
        organizer: "Bob Axlerod",
        status: "Pending",
        requiredTravelers: 5,
        travelersJoined: 1,
        isActive: false,
        imagePath: "../../../assets/img/img1.png",
        itinerary: [
        ]
    },
    {
        id: 8,
        travelGoalName: "Teas and Biscuits",
        location: "London, UK",
        departureDate: new Date("2021-03-09T16:00:00.000Z"),
        departureTime: "9:00",
        returnDate: new Date("2021-03-25T16:00:00.000Z"),
        returnTime: "18:00",
        organizer: "Michael Highland",
        status: "Pending",
        requiredTravelers: 7,
        travelersJoined: 2,
        isActive: false,
        imagePath: "../../../assets/img/img1.png",
        itinerary: [
        ]
    },
    {
        id: 9,
        travelGoalName: "Greetings, Comrade",
        location: "Russia",
        departureDate: new Date("2019-10-09T16:00:00.000Z"),
        departureTime: "9:00",
        returnDate: new Date("2019-10-25T16:00:00.000Z"),
        returnTime: "20:00",
        organizer: "Yuri Chenkov",
        status: "Completed",
        requiredTravelers: 5,
        travelersJoined: 5,
        isActive: false,
        imagePath: "../../../assets/img/img1.png",
        itinerary: [
        ]
    },
    {
        id: 10,
        travelGoalName: "Immunity Challenge",
        location: "Wuhan, China",
        departureDate: new Date("2020-01-15T16:00:00.000Z"),
        departureTime: "6:00",
        returnDate: new Date("2020-01-25T16:00:00.000Z"),
        returnTime: "18:00",
        organizer: "Jack Ma",
        status: "Completed",
        requiredTravelers: 10,
        travelersJoined: 10,
        isActive: false,
        imagePath: "../../../assets/img/img1.png",
        itinerary: [
        ]
    }
];