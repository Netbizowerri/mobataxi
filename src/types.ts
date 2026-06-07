export interface Benefit {
  id: string;
  title: string;
  description: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
}

export interface CityRate {
  name: string;
  region: string;
  baseFare: number;
  perKm: number;
  perMinute: number;
  payoutSplit: number; // e.g. 0.82 for 82% to driver
}

export interface DriverSignupData {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  vehicleInfo: string;
  licenseClass: string;
  drivingHistoryClean: boolean;
  message: string;
}
