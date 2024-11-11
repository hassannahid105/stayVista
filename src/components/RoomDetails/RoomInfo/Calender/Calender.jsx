/* eslint-disable react/prop-types */
import { DateRange } from "react-date-range";
const Calender = ({ value }) => {
  return (
    <DateRange
      rangeColors={["#f45f5e"]}
      direction="vertical"
      showDateDisplay={false}
      ranges={[value]}
      // onChange={handleSelect}
      // date={value.startdate}
      // minDate={value.startdate}
      // maxDate={value.endDate}
    ></DateRange>
  );
};

export default Calender;
