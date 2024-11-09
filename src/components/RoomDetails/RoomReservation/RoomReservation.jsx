/* eslint-disable react/prop-types */
import { differenceInDays } from "date-fns";
import Button from "../../Button/Button";
import Calender from "../RoomInfo/Calender/Calender";
import { useState } from "react";

const RoomReservation = ({ room }) => {
  // total days
  const totalDays = differenceInDays(new Date(room.to), new Date(room.from));
  console.log(totalDays);
  // total price calculation
  const totalPrice = totalDays * room.price;
  const value = useState({
    startDate: new Date(room?.from),
    endDate: new Date(room.to),
    key: "selection",
  });
  return (
    <div className="border-2 rounded-xl overflow-hidden bg-white pt-4">
      <div className="flex justify-center items-center gap-1">
        <div className="text-2xl font-semibold">${room.price}</div>
        <div className="font-netural-600 ">
          <small>
            <sub> Per Night</sub>
          </small>
        </div>
      </div>
      <hr className="mt-4" />
      <div className="flex justify-center">
        <Calender value={value}></Calender>
      </div>
      <div className="p-4">
        <Button label={"Reserve"}></Button>
      </div>
      <div className="p-4 flex items-center justify-between font-semibold text-lg">
        <p>Total</p>
        <p>${totalPrice}</p>
      </div>
    </div>
  );
};

export default RoomReservation;
