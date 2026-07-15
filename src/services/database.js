import { generateRooms, generateGuests } from "../data/generator";

const STORAGE_KEY = "suntos-hotel-db";

function createDatabase() {
  return {
    rooms: generateRooms(80),
    guests: generateGuests(150),
    reservations: [],
    receipts: [],
    transactions: [],
    employees: [],
    inventory: [],
    expenses: []
  };
}

function loadDatabase() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (saved) {
    return JSON.parse(saved);
  }

  const db = createDatabase();

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(db)
  );

  return db;
}

let database = loadDatabase();

function saveDatabase() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(database)
  );
}

export function getDatabase() {
  return database;
}

export function updateDatabase(newDatabase) {
  database = newDatabase;
  saveDatabase();
}

export function resetDatabase() {
  database = createDatabase();
  saveDatabase();
}