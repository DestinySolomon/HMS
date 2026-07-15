import {
  getDatabase,
  updateDatabase
} from "./database";

export function getRooms() {
  return getDatabase().rooms;
}

export function getRoom(number) {
  return getRooms().find(
    room => room.number === number
  );
}

export function updateRoom(roomNumber, updates) {
  const db = getDatabase();

  db.rooms = db.rooms.map(room =>

    room.number === roomNumber
      ? { ...room, ...updates }
      : room

  );

  updateDatabase(db);
}

export function getAvailableRooms() {
  return getRooms().filter(
    room => room.status === "Available"
  );
}