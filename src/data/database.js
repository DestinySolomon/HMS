import {
  generateRooms,
  generateGuests
} from "./generator";

export const database = {

  dashboard: {
    revenueToday: 4800000,
    monthlyRevenue: 9800000,
    occupiedRooms: 62,
    availableRooms: 18,
    maintenanceRooms: 5,
    activeGuests: 145
  },

  rooms: generateRooms(),

  guests: generateGuests(),

  reservations: [],

  receipts: [],

  transactions: [],

  inventory: [],

  employees: []

};