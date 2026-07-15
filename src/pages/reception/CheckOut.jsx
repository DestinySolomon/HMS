import { useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import { currentGuests } from "../../data/currentGuests";

export default function Checkout() {
  const [selected, setSelected] = useState(null);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1
            className="
text-white
text-3xl
font-bold
"
          >
            Guest Check Out
          </h1>

          <p
            className="
text-gray-400
"
          >
            Finalize guest payment and release room
          </p>
        </div>

        <div
          className="
grid
grid-cols-1
sm:grid-cols-2
xl:grid-cols-3
gap-6
"
        >
          {currentGuests.map((guest) => (
            <div
              key={guest.id}
              className="
bg-[#181C23]
border
border-[#2A2F38]
rounded-xl
p-6
"
            >
              <h2
                className="
text-white
text-xl
font-bold
"
              >
                {guest.name}
              </h2>

              <div
                className="
mt-5
space-y-3
text-gray-400
"
              >
                <p>
                  Room:
                  <span className="text-white ml-2">{guest.room}</span>
                </p>

                <p>
                  Stay:
                  <span className="text-white ml-2">{guest.nights} nights</span>
                </p>

                <p>
                  Room Charges:
                  <span className="text-white ml-2">
                    ₦{guest.roomCharge.toLocaleString()}
                  </span>
                </p>

                <p>
                  Extras:
                  <span className="text-white ml-2">
                    ₦{guest.extraCharges.toLocaleString()}
                  </span>
                </p>
              </div>

              <button
                onClick={() => setSelected(guest)}
                className="
mt-6
w-full
bg-[#C8A45D]
text-black
py-3
rounded-lg
font-semibold
"
              >
                Process Checkout
              </button>
            </div>
          ))}
        </div>

        {selected && <CheckoutModal guest={selected} />}
      </div>
    </DashboardLayout>
  );
}

function CheckoutModal({ guest }) {
  const total = guest.roomCharge + guest.extraCharges;

  return (
    <div
      className="
fixed
inset-0
bg-black/60
flex
items-center
justify-center
"
    >
      <div
        className="
bg-[#181C23]
rounded-xl
p-8
w-full
max-w-md
"
      >
        <h2
          className="
text-white
text-2xl
font-bold
mb-6
"
        >
          Final Bill
        </h2>

        <div
          className="
space-y-4
text-gray-300
"
        >
          <p>
            Guest:
            <strong className="text-white ml-2">{guest.name}</strong>
          </p>

          <p>
            Room:
            <strong className="text-white ml-2">{guest.room}</strong>
          </p>

          <p>
            Total:
            <strong className="text-[#C8A45D] ml-2">
              ₦{total.toLocaleString()}
            </strong>
          </p>
        </div>

        <select
          className="
w-full
mt-6
bg-[#101317]
border
border-[#2A2F38]
p-3
rounded-lg
text-white
"
        >
          <option>Cash</option>

          <option>Card</option>

          <option>Transfer</option>
        </select>

        <button
          onClick={() => alert("Checkout completed")}
          className="
mt-6
w-full
bg-[#C8A45D]
text-black
py-3
rounded-lg
font-semibold
"
        >
          Complete Checkout
        </button>
      </div>
    </div>
  );
}
