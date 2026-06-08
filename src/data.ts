import { Benefit, Feature, CityRate } from "./types";

export const DRIVER_BENEFITS: Benefit[] = [
  {
    id: "hours",
    title: "Flexible Working Hours",
    description: "Work whenever you want. Turn the app on to make money, and turn it off when you're done. You're entirely your own boss.",
  },
  {
    id: "earnings",
    title: "Competitive Earnings",
    description: "Keep more of what you earn. We offer some of the lowest platform service splits in the Canadian market, maximizing your profits.",
  },
  {
    id: "payouts",
    title: "Fast Payouts",
    description: "Get your earnings paid out directly to your bank account with fast, automated weekly transfers or instant-cashout options.",
  },
  {
    id: "support",
    title: "Local Canadian Support",
    description: "Get assistance from real human operators located right here in Canada, ready to assist you on the road 24/7.",
  },
  {
    id: "customers",
    title: "Growing Customer Base",
    description: "Tap into an ever-expanding pool of riders as Moba Taxi establishes itself as the go-to homegrown alternative.",
  },
];

export const DRIVER_REQUIREMENTS = [
  "Valid Class 4 Driver’s License (or regional rideshare equivalent)",
  "Roadworthy vehicle in excellent mechanical & physical condition",
  "Clean driving record & vulnerable sector background check",
];

export const RIDER_FEATURES: Feature[] = [
  {
    id: "pickup",
    title: "Fast Pickup Times",
    description: "Moba Taxi's advanced dispatching algorithms match you with the nearest driver to minimize wait times.",
  },
  {
    id: "fares",
    title: "Affordable Fares",
    description: "Get upfront, highly competitive quotes before you book, with zero surprise surge markups.",
  },
  {
    id: "drivers",
    title: "Safe & Verified Drivers",
    description: "We verify every driver's history, licensing, and background so you can sit back and ride with absolute peace of mind.",
  },
  {
    id: "booking",
    title: "Easy In-App Booking",
    description: "A frictionless mobile app layout crafted for lightning-fast hailing, destination input, and live trip tracking.",
  },
  {
    id: "payments",
    title: "Cashless & Secure Payments",
    description: "Pay seamlessly using your credit/debit cards stored in our securely encrypted, PCI-compliant app wallet.",
  },
];

export const CANADIAN_REGIONS: CityRate[] = [
  {
    name: "St. John's",
    region: "Newfoundland & Labrador 🇨🇦",
    baseFare: 4.50,
    perKm: 1.85,
    perMinute: 0.45,
    payoutSplit: 0.82, // 82% to the driver
  },
  {
    name: "Mount Pearl",
    region: "Newfoundland & Labrador 🇨🇦",
    baseFare: 4.50,
    perKm: 1.85,
    perMinute: 0.45,
    payoutSplit: 0.82,
  },
  {
    name: "Conception Bay South",
    region: "Newfoundland & Labrador 🇨🇦",
    baseFare: 4.75,
    perKm: 1.90,
    perMinute: 0.45,
    payoutSplit: 0.82,
  },
  {
    name: "Corner Brook",
    region: "Newfoundland & Labrador 🇨🇦",
    baseFare: 4.50,
    perKm: 1.95,
    perMinute: 0.50,
    payoutSplit: 0.82,
  },
  {
    name: "Grand Falls-Windsor",
    region: "Newfoundland & Labrador 🇨🇦",
    baseFare: 4.50,
    perKm: 1.95,
    perMinute: 0.50,
    payoutSplit: 0.82,
  },
  {
    name: "Gander",
    region: "Newfoundland & Labrador 🇨🇦",
    baseFare: 4.50,
    perKm: 1.95,
    perMinute: 0.50,
    payoutSplit: 0.82,
  },
];

export const CANADIAN_PROVINCES = [
  "Newfoundland & Labrador",
  "Nova Scotia",
  "New Brunswick",
  "Prince Edward Island",
  "Quebec",
  "Ontario",
  "Manitoba",
  "Saskatchewan",
  "Alberta",
  "British Columbia",
  "Yukon",
  "Northwest Territories",
  "Nunavut",
];

export const EXPANDING_PROVINCES = [
  { name: "Nova Scotia", status: "Coming Q3 2026", code: "NS" },
  { name: "New Brunswick", status: "Coming Q4 2026", code: "NB" },
  { name: "Prince Edward Island", status: "Coming Q4 2026", code: "PE" },
  { name: "Ontario", status: "Coming Q1 2027", code: "ON" },
  { name: "Alberta", status: "Coming Q2 2027", code: "AB" },
];
