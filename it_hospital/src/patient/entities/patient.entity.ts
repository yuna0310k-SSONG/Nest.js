export class Patient {
  id: number;
  name: string;
  injury: string;
  severity: '경상' | '부상' | '중상' | '심정지';
}
