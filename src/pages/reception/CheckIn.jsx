import { useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import { getAvailableRooms } from "../../services/roomService";
import { useHotel } from "../../store/useHotel";

export default function CheckIn() {
  const [guest, setGuest] = useState({
    name: "",
    phone: "",
    email: "",
    room: "",
  });

  const { addGuest } = useHotel();
  const rooms = getAvailableRooms();

  const handleChange = (e) => {
    setGuest({
      ...guest,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();

    addGuest({
      name: guest.name,
      phone: guest.phone,
      email: guest.email,
      room: guest.room,
      status: "Checked In",
    });

    alert("Guest checked in successfully.");
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-white text-3xl font-bold">Guest Check In</h1>
          <p className="text-gray-400">Register a new hotel guest</p>
        </div>

        <form
          onSubmit={submit}
          className="bg-[#181C23] rounded-xl p-8 max-w-3xl space-y-5"
        >
          <Input
            label="Full Name"
            name="name"
            value={guest.name}
            onChange={handleChange}
          />

          <Input
            label="Phone Number"
            name="phone"
            value={guest.phone}
            onChange={handleChange}
          />

          <Input
            label="Email"
            name="email"
            value={guest.email}
            onChange={handleChange}
          />

          <div>
            <label className="text-gray-400 text-sm">Select Room</label>

            <select
              name="room"
              value={guest.room}
              onChange={handleChange}
              className="w-full mt-2 bg-[#101317] border border-[#2A2F38] rounded-lg p-3 text-white"
            >
              <option value="">Choose room</option>

              {rooms.map((room) => (
                <option key={room.id} value={room.number}>
                  Room {room.number}
                </option>
              ))}
            </select>
          </div>

          <button className="bg-[#C8A45D] text-black font-semibold rounded-lg px-8 py-3">
            Complete Check In
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="text-gray-400 text-sm">{label}</label>

      <input
        {...props}
        className="w-full mt-2 bg-[#101317] border border-[#2A2F38] rounded-lg p-3 text-white"
      />
    </div>
  );
}
