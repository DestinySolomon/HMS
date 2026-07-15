import { useEffect, useState } from "react";
import { HotelContext } from "./HotelContextStore.js";

function loadHotelState() {
  try {
    const data = JSON.parse(localStorage.getItem("hotel-db"));

    return {
      rooms: data?.rooms ?? [],
      guests: data?.guests ?? [],
      activities: data?.activities ?? [],
    };
  } catch {
    return {
      rooms: [],
      guests: [],
      activities: [],
    };
  }
}

export function HotelProvider({ children }) {
  const initialState = loadHotelState();

  const [rooms, setRooms] = useState(initialState.rooms);
  const [guests, setGuests] = useState(initialState.guests);
  const [activities, setActivities] = useState(initialState.activities);

  useEffect(() => {
    localStorage.setItem(
      "hotel-db",
      JSON.stringify({
        rooms,
        guests,
        activities,
      }),
    );
  }, [rooms, guests, activities]);

  function addActivity(message) {
    setActivities((prev) => [
      {
        id: Date.now(),
        message,
        time: new Date().toLocaleTimeString(),
      },

      ...prev,
    ]);
  }

  function addGuest(guest) {
    setGuests((prev) => [...prev, guest]);

    setRooms((prev) =>
      prev.map((room) =>
        room.number === guest.room
          ? {
              ...room,

              status: "Occupied",

              guest: guest.name,
            }
          : room,
      ),
    );

    addActivity(`${guest.name} checked into Room ${guest.room}`);
  }

  return (
    <HotelContext.Provider
      value={{
        rooms,

        guests,

        activities,

        addGuest,
      }}
    >
      {children}
    </HotelContext.Provider>
  );
}
