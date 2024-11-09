/* eslint-disable no-unused-vars */

import { useNavigate, useSearchParams } from "react-router-dom";
import queryString from "query-string";

/* eslint-disable react/prop-types */
const CategoriesBox = ({ label, icon: Icon, selected }) => {
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();
  const handleClick = () => {
    let currentQuery = {};
    if (params) {
      currentQuery = queryString.parse(params.toString());
      const updatedQuery = { ...currentQuery, category: label };
      const url = queryString.stringifyUrl({
        url: "/",
        query: updatedQuery,
      });
      navigate(url);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`flex flex-col items-center justify-center gap-1  p-3 hover:text-rose-500 transition cursor-pointer ${
        selected ? "text-cyan-400 border-b-4" : ""
      }`}
    >
      <Icon size={26}></Icon>

      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default CategoriesBox;
