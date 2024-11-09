import { useEffect, useState } from "react";
import Container from "../../components/Shared/Container";
import { useParams } from "react-router-dom";
import Header from "../../components/RoomDetails/Header/Header";
import RoomInfo from "../../components/RoomDetails/RoomInfo/RoomInfo";
import RoomReservation from "../../components/RoomDetails/RoomReservation/RoomReservation";

const RoomDetails = () => {
  const [rooms, setRooms] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch("/rooms.json")
      .then((res) => res.json())
      .then((data) => {
        const finded = data.find((room) => room._id === id);
        setRooms(finded);
      });
  }, [id]);
  console.log(rooms);
  return (
    <Container>
      <div>
        {/* Header */}
        <Header room={rooms}></Header>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-7 gap-6 mt-10">
        {/* room info */}
        <div className="col-span-5">
          <RoomInfo room={rooms}></RoomInfo>
        </div>
        {/* Room Resrevation */}
        <div className="col-span-2 order-first md:order-last">
          <RoomReservation room={rooms}></RoomReservation>
        </div>
      </div>
    </Container>
  );
};

export default RoomDetails;
