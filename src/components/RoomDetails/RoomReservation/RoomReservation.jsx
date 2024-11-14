/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../../Button/Button";
import Calender from "../RoomInfo/Calender/Calender";
import { formatDistance } from "date-fns";
import BookingModal from "../../Modal/BookingModal";
import useAuth from "../../../hooks/useAuth";

const RoomReservation = ({ room }) => {
  const { user } = useAuth();
  const [value] = useState({
    startDate: new Date(room?.from),
    endDate: new Date(room?.to),
    key: "selection",
  });
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  // total days * price
  const totalDays = parseInt(
    formatDistance(new Date(room?.to), new Date(room?.from)).split(" ")[0]
  );
  // total price calculation
  const totalPrice = totalDays * room?.price;

  // booking info
  const [bookingInfo] = useState({
    guest: {
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
    },
    host: room?.host?.email,
    location: room?.location,
    price: totalPrice,
    to: value.endDate,
    from: value.startDate,
    title: room?.title,
    roomId: room?._id,
    image: room?.image,
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
        <Button
          disabled={room.host.email === user.email || room.booked}
          onClick={() => setIsOpen(true)}
          label={"Reserve"}
        ></Button>
      </div>
      <div className="p-4 flex items-center justify-between font-semibold text-lg">
        <p>Total</p>
        <p>${totalPrice}</p>
      </div>
      <BookingModal
        isOpen={isOpen}
        closeModal={closeModal}
        bookingInfo={bookingInfo}
      ></BookingModal>
    </div>
  );
};

export default RoomReservation;
