export class FlightScheduleDto {
  departure: string;
  destination: string;
  departureDate: string;
  departureTime: string;
}

export class CreateFlightDto {
  flightName: string;
  capacity: number;
  schedules: FlightScheduleDto[];
}
