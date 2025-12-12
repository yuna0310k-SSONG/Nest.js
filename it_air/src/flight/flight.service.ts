import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';

@Injectable()
export class FlightService {
  private flights = [
    {
      id: 1,
      flightName: 'KE101',
      capacity: 180,
      schedules: [
        {
          departure: 'ICN',
          destination: 'LAX',
          departureDate: '2025-01-01',
          departureTime: '10:00',
        },
      ],
    },
    {
      id: 2,
      flightName: 'OZ202',
      capacity: 220,
      schedules: [
        {
          departure: 'ICN',
          destination: 'SFO',
          departureDate: '2025-02-15',
          departureTime: '14:30',
        },
      ],
    },
    {
      id: 3,
      flightName: 'KE303',
      capacity: 150,
      schedules: [
        {
          departure: 'GMP',
          destination: 'FUK',
          departureDate: '2025-03-10',
          departureTime: '09:20',
        },
      ],
    },
  ];

  create(createFlightDto: CreateFlightDto) {
    const { flightName, capacity, schedules } = createFlightDto;
    this.flights.push({
      id: this.flights.length + 1,
      flightName,
      capacity,
      schedules,
    });
    return `${flightName} flight has been created.`;
    // const newFlight = {
    //   id: this.flights.length + 1,
    //   ...createFlightDto,
    // };

    // this.flights.push(newFlight);
    // return newFlight;
  }

  findAll() {
    return this.flights;
  }

  findOne(id: number) {
    const flight = this.flights.find((f) => f.id === id);
    if (!flight) throw new NotFoundException(`Flight ${id} not found`);
    return flight;
  }

  update(id: number, updateFlightDto: UpdateFlightDto) {
    const flightIndex = this.flights.findIndex((f) => f.id === id);
    if (flightIndex === -1)
      throw new NotFoundException(`Flight #${id} not found`);

    // 기존 값 유지하고 수정된 값만 덮기
    this.flights[flightIndex] = {
      ...this.flights[flightIndex],
      ...updateFlightDto,
    };

    return this.flights[flightIndex];
  }

  remove(id: number) {
    const flightIndex = this.flights.findIndex((f) => f.id === id);
    if (flightIndex === -1)
      throw new NotFoundException(`Flight #${id} not found`);

    const deleted = this.flights[flightIndex];
    this.flights.splice(flightIndex, 1);

    return deleted;
  }
}
