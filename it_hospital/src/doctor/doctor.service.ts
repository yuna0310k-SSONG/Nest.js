import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { Doctor } from './entities/doctor.entity';

@Injectable()
export class DoctorService {
  private doctors: Doctor[] = [
    {
      id: 1,
      name: 'Dr. Smith',
      major: 'Cardiology',
      career: ['Resident at XYZ Hospital', 'Fellowship at ABC Clinic'],
    },
    {
      id: 2,
      name: 'Dr. Johnson',
      major: 'Neurology',
      career: ['Intern at DEF Hospital', 'Researcher at GHI Institute'],
    },
    {
      id: 3,
      name: 'Dr. Lee',
      major: 'Pediatrics',
      career: ['Resident at JKL Hospital', 'Attending at MNO Clinic'],
    },
    {
      id: 4,
      name: 'Dr. Brown',
      major: 'Orthopedics',
      career: ['Fellowship at PQR Hospital', 'Surgeon at STU Clinic'],
    },
  ];
  create(createDoctorDto: CreateDoctorDto) {
    const { name, major, career } = createDoctorDto;

    if (!name) throw new Error('name is required');
    if (typeof name !== 'string') throw new Error('name must be a string');

    if (!major) throw new Error('major is required');
    if (typeof major !== 'string') throw new Error('major must be a string');

    if (!Array.isArray(career)) throw new Error('career must be an array');
    if (career.length === 0) throw new Error('career must not be empty');

    const newDoctor = {
      id: this.doctors.length + 1,
      ...createDoctorDto,
    };

    this.doctors.push(newDoctor);
    return newDoctor;
  }
  findAll() {
    return this.doctors;
  }

  findOne(id: number) {
    const doc = this.doctors.find((v) => v.id === id);
    if (!doc) throw new Error('Doctor not found');
    return doc;
  }

  update(id: number, updateDoctorDto: UpdateDoctorDto) {
    const index = this.doctors.findIndex((v) => v.id === id);
    if (index === -1) throw new NotFoundException(`Doctor #${id} not found`);

    this.doctors[index] = {
      ...this.doctors[index],
      ...updateDoctorDto,
    };

    return this.doctors[index];
  }

  remove(id: number) {
    const index = this.doctors.findIndex((v) => v.id === id);
    if (index === -1) throw new NotFoundException(`Doctor #${id} not found`);

    const deletedDoctor = this.doctors[index];

    this.doctors.splice(index, 1);

    return deletedDoctor;
  }
}
