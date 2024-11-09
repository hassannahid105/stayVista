/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = ({ room }) => {
  const { _id, title, image, location, price } = room;
  return (
    <Link to={`/room/${_id}`} className="col-span-1 cursor-pointer group">
      <div className="flex flex-col gap-2 w-full">
        <div
          className="
              aspect-square 
              w-full 
              relative 
              rounded-xl
              overflow-hidden
            "
        >
          <img
            className="
                object-cover 
                h-full 
                w-full 
                group-hover:scale-110 
                transition
              "
            src={image}
            alt="Room"
          />
          <div
            className="
              absolute
              top-3
              right-3
            "
          ></div>
        </div>
        <div className="font-semibold text-lg">{title}</div>
        {/* TODO: dynamic date range added */}
        <div className="font-light text-neutral-500">
          5 nights . June 19 - 26
        </div>
        <div className="flex flex-row items-center gap-1 uppercase">
          <div className="font-semibold">$ {price}</div>
          <div className="font-light">
            <span>
              <small>per </small>
            </span>
            night
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
