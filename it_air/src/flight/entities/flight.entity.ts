export class Flight {
  id: number;
  flightName: string;
  capacity: number;
  schedules: {
    departure: string;
    destination: string;
    departureDate: string;
    departureTime: string;
  }[];
}
