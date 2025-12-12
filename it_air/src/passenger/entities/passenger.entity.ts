export enum MembershipStatus {
  Bronze = 'Bronze',
  Silver = 'Silver',
  Gold = 'Gold',
}

export class Passenger {
  name: string;
  passportNumber: string;
  membershipStatus: MembershipStatus;
}
