import Categories from "../../components/Rooms/Categories/Categories";
import Rooms from "../../components/Rooms/Rooms";

const Home = () => {
  return (
    <div>
      {/*categories section  */}
      <Categories />
      {/* Rooms section */}
      <Rooms />
    </div>
  );
};

export default Home;
