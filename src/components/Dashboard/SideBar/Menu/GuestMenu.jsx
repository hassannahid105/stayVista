/* eslint-disable react/prop-types */
import { useState } from "react";
import MenuItem from "../MenuItem";
import { BsFingerprint } from "react-icons/bs";
import { GrUserAdmin } from "react-icons/gr";
import HostModal from "../../../Modal/HostRequestModal";
import useAuth from "../../../../hooks/useAuth";
import { becameHost } from "../../../../api/auth";
import toast from "react-hot-toast";
const GuestMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const closeModal = () => {
    setIsOpen(false);
  };
  const modalHandler = async () => {
    try {
      const data = await becameHost(user?.email);
      if (data.modifiedCount > 0) {
        console.log();
      } else {
        toast.success("wait for admin");
      }
      console.log(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsOpen(false);
    }
  };

  return (
    <>
      <MenuItem icon={BsFingerprint} label="My Bookings" address="my-booking" />

      <div
        onClick={() => setIsOpen(true)}
        className="flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer"
      >
        <GrUserAdmin className="w-5 h-5" />

        <span className="mx-4 font-medium">Become A Host</span>
      </div>
      <HostModal
        isOpen={isOpen}
        closeModal={closeModal}
        modalHandler={modalHandler}
      ></HostModal>
    </>
  );
};

export default GuestMenu;
