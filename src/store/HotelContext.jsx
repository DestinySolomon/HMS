import { createContext, useContext, useEffect, useState } from "react";

const HotelContext = createContext();

export function HotelProvider({ children }) {

    const [rooms, setRooms] = useState([]);
    const [guests, setGuests] = useState([]);
    const [activities, setActivities] = useState([]);
    const [transactions, setTransactions] = useState([]);
    const [receipts, setReceipts] = useState([]);

    useEffect(() => {

        const data = JSON.parse(
            localStorage.getItem("hotel-db")
        );

        if(data){

            setRooms(data.rooms || []);
            setGuests(data.guests || []);

        }

    },[]);

    useEffect(()=>{

        localStorage.setItem(
            "hotel-db",
            JSON.stringify({
                rooms,
                guests,
                activities,
                transactions,
                receipts
            })
        );

    },[
        rooms,
        guests,
        activities,
        transactions,
        receipts
    ]);



    function addActivity(message){

        setActivities(prev=>[

            {
                id:Date.now(),
                message,
                time:new Date().toLocaleTimeString()
            },

            ...prev

        ]);

    }



    function addGuest(guest){

        setGuests(prev=>[

            ...prev,

            guest

        ]);



        setRooms(prev=>

            prev.map(room=>

                room.number===guest.room

                ?

                {

                    ...room,

                    status:"Occupied",

                    guest:guest.name

                }

                :

                room

            )

        );



        addActivity(

            `${guest.name} checked into Room ${guest.room}`

        );

    }



    return (

        <HotelContext.Provider

            value={{

                rooms,

                guests,

                activities,

                transactions,

                receipts,

                addGuest

            }}

        >

            {children}

        </HotelContext.Provider>

    );

}

export function useHotel(){

    return useContext(HotelContext);

}