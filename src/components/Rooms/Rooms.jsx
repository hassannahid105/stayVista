import { useEffect, useState } from "react";
import Card from "./Card";
import Container from "../Shared/Container";
import { useSearchParams } from "react-router-dom";
import Heading from "../Shared/Heading/Heading";
import { getAllRooms } from "../../api/rooms";

const Rooms = () => {
  const [params] = useSearchParams();
  const [rooms, setRooms] = useState([]);
  const category = params.get("category");
  useEffect(() => {
    getAllRooms().then((data) => {
      if (category) {
        const filtered = data.filter((room) => room.category === category);
        setRooms(filtered);
      } else {
        setRooms(data);
      }
    });
  }, [category]);
  return (
    <Container>
      {rooms && rooms.length > 0 ? (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 pt-12">
          {rooms.map((room) => (
            <Card key={room._id} room={room}></Card>
          ))}
        </div>
      ) : (
        <Heading
          center={true}
          title={"No Rooms Available In This Category!"}
          subtitle={"Please Select Other category"}
        ></Heading>
      )}
    </Container>
  );
};
export default Rooms;
