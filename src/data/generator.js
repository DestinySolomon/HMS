const roomTypes = [
  "Standard Room",
  "Deluxe Room",
  "Executive Suite",
  "Presidential Suite"
];

const statuses = [
  "Available",
  "Occupied",
  "Cleaning",
  "Maintenance"
];

export function generateRooms(count = 80) {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    number: (101 + index).toString(),
    type: roomTypes[Math.floor(Math.random() * roomTypes.length)],
    floor: Math.floor(index / 20) + 1,
    price: [60000, 95000, 150000, 300000][Math.floor(Math.random() * 4)],
    status: statuses[Math.floor(Math.random() * statuses.length)],
    guest: null
  }));
}


const firstNames = [
  "Michael",
  "Sarah",
  "David",
  "John",
  "James",
  "Emily",
  "Sophia",
  "Daniel",
  "Grace",
  "Victor"
];

const lastNames = [
  "Johnson",
  "Williams",
  "Brown",
  "Wilson",
  "Taylor",
  "Stone",
  "Smith",
  "Anderson"
];

export function generateGuests(count = 150) {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${
      lastNames[Math.floor(Math.random() * lastNames.length)]
    }`,
    phone: `080${Math.floor(10000000 + Math.random() * 89999999)}`,
    room: Math.floor(Math.random() * 80) + 101,
    checkedIn: Math.random() > 0.5
  }));
}