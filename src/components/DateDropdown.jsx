import { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateDropdown = ({ date, setDate }) => {
  const CustomDatePickerButton = forwardRef(
    function renderCustomDatePickerButton({ value, onClick }, ref) {
      return (
        <button
          className="bg-sky-100 py-3 px-5 rounded w-full text-left"
          onClick={onClick}
          ref={ref}
        >
          <span className="italic text-xs mr-7 min-w-10 inline-block">
            Date
          </span>
          <span>{value}</span>
        </button>
      );
    }
  );
  return (
    <DatePicker
      selected={date}
      onChange={(date) => setDate(date)}
      customInput={<CustomDatePickerButton />}
      wrapperClassName="w-full"
    />
  );
};

export default DateDropdown;