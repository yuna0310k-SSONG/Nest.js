import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePassengerDto } from './dto/create-passenger.dto';
import { UpdatePassengerDto } from './dto/update-passenger.dto';

@Injectable()
export class PassengerService {
  private passengers = [
    {
      id: 1,
      name: 'Kim Hana',
      passportNumber: 'P1234567',
      membershipStatus: 'Bronze',
    },
    {
      id: 2,
      name: 'Lee Minsoo',
      passportNumber: 'P2233445',
      membershipStatus: 'Silver',
    },
    {
      id: 3,
      name: 'Park Jiyun',
      passportNumber: 'P9876543',
      membershipStatus: 'Gold',
    },
    {
      id: 4,
      name: 'Choi Minjae',
      passportNumber: 'P1112223',
      membershipStatus: 'Bronze',
    },
    {
      id: 5,
      name: 'Song Yuna',
      passportNumber: 'P5566778',
      membershipStatus: 'Silver',
    },
  ];

  create(createPassengerDto: CreatePassengerDto) {
    const newPassenger = {
      id: this.passengers.length + 1,
      ...createPassengerDto,
    };

    this.passengers.push(newPassenger);
    return newPassenger;
    // const { name, passportNumber, membershipStatus } = createPassengerDto;
    // this.passengers.push({
    //   id: this.passengers.length + 1,
    //   name,
    //   passportNumber,
    //   membershipStatus,
    // });
    // return `${name} has been added as a passenger.`;
  }

  findAll() {
    return this.passengers;
  }

  findOne(id: number) {
    const passenger = this.passengers.find((p) => p.id === id);
    if (!passenger) throw new NotFoundException(`Passenger #${id} not found`);
    return passenger;
  }
  update(id: number, updatePassengerDto: UpdatePassengerDto) {
    const index = this.passengers.findIndex((p) => p.id === id);
    if (index === -1) throw new NotFoundException(`Passenger ${id} not found`);
    this.passengers[index] = {
      ...this.passengers[index],
      ...updatePassengerDto,
    };
    return this.passengers[index];
  }

  remove(id: number) {
    const index = this.passengers.findIndex((p) => p.id === id);
    if (index === -1) throw new NotFoundException(`Passenger #${id} not found`);

    const removed = this.passengers[index];
    this.passengers.splice(index, 1);

    return removed;
  }
}
