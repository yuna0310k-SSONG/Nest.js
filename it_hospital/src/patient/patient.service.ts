import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient } from './entities/patient.entity';

@Injectable()
export class PatientService {
  private patients: Patient[] = [
    { id: 1, name: '홍길동', injury: '골절', severity: '중상' },
    { id: 2, name: '김철수', injury: '화상', severity: '부상' },
    { id: 3, name: '이영희', injury: '심정지', severity: '심정지' },
    { id: 4, name: '박민수', injury: '찰과상', severity: '경상' },
  ];
  create(createPatientDto: CreatePatientDto) {
    const newPatient = {
      id: this.patients.length + 1,
      ...createPatientDto,
    };
    this.patients.push(newPatient);
    return newPatient;
  }

  findAll() {
    return this.patients;
  }

  findOne(id: number) {
    const patient = this.patients.find((v) => v.id === id);
    if (!patient) throw new Error('Patient not found');
    return patient;
  }

  update(id: number, updatePatientDto: UpdatePatientDto) {
    const index = this.patients.findIndex((v) => v.id === id);
    if (index === -1) throw new Error('Patient not found');
    this.patients[index] = {
      ...this.patients[index],
      ...updatePatientDto,
    };
    return this.patients[index];
  }

  remove(id: number) {
    const index = this.patients.findIndex((v) => v.id === id);
    if (index === -1) throw new Error('Patient not found');

    const deletedPatient = this.patients[index];
    this.patients.splice(index, 1);
    return deletedPatient;
  }
}
