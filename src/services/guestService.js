import {
  getDatabase,
  updateDatabase
} from "./database";

export function getGuests() {
  return getDatabase().guests;
}

export function addGuest(guest) {

  const db = getDatabase();

  guest.id = Date.now();

  db.guests.push(guest);

  updateDatabase(db);

}

export function removeGuest(id) {

  const db = getDatabase();

  db.guests =
    db.guests.filter(
      guest => guest.id !== id
    );

  updateDatabase(db);

}