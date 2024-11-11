/* eslint-disable no-undef */
import { useState } from "react";
import AddRoomForm from "../../../components/Form/AddRoomForm";
import { imageUpload } from "../../../api/utlis";

const AddRoom = () => {
  const [uploadButtonText, setUploadButtonText] = useState("Upload Images");
  const [loading] = useState(false);
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const { user } = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.table(user);
    const form = e.target;
    const location = form.location.value;
    const category = form.category.value;
    const title = form.title.value;
    const price = form.price.value;
    const guest = form.total_guest.value;
    const bathrooms = form.bathrooms.value;
    const description = form.description.value;
    const bedrooms = form.bedrooms.value;
    const image = form.image.files[0];
    const to = dates.endDate;
    const from = dates.startDate;
    const image_url = await imageUpload(image);
    const host = {
      name: user?.displayName,
      image: user?.photoUrl,
      email: user?.email,
    };
    const roomData = {
      location,
      category,
      title,
      price,
      guest,
      bathrooms,
      description,
      bedrooms,
      to,
      from,
      image: image_url?.data?.display_url,
      host,
    };
    console.table(roomData);
  };

  //   handle date  change from react-date-range calender
  const handleDates = (ranges) => {
    setDates(ranges.selection);
  };
  //   handle upload button
  const handleImageChange = (image) => {
    console.log(image);
    setUploadButtonText(image.name);
  };
  return (
    <div>
      <AddRoomForm
        handleSubmit={handleSubmit}
        handleDates={handleDates}
        dates={dates}
        handleImageChange={handleImageChange}
        loading={loading}
        uploadButtonText={uploadButtonText}
      ></AddRoomForm>
    </div>
  );
};

export default AddRoom;
