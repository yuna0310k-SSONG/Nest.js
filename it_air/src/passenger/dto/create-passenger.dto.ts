export class CreatePassengerDto {
  name: string;
  passportNumber: string;
  membershipStatus: 'Bronze' | 'Silver' | 'Gold';
}
