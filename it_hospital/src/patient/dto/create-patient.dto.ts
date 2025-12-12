export class CreatePatientDto {
  name: string;
  injury: string;
  severity: '경상' | '부상' | '중상' | '심정지';
}
