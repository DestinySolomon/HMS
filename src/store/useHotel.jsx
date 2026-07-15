import { useContext } from "react";
import { HotelContext } from "./HotelContextStore.js";

export function useHotel() {
  return useContext(HotelContext);
}
