import {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
  } from "@headlessui/react";
  
  const formatTime = (date) => {
    return Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      hour12: false, // show as 24 hours
      minute: "numeric",
    }).format(date);
  };
  
  const getTimeSlots = () => {
    // Time slots start at 12:00
    const timeSlotStart = new Date(0, 0, 0, 12, 0, 0);
    // Time slots end at 21:00
    const endTimeSlot = new Date(0, 0, 0, 21, 0, 0);
    let timeSlots = [];
    let timeSlot = new Date(timeSlotStart.getTime());
    while (timeSlot.getTime() <= endTimeSlot.getTime()) {
      timeSlots.push(timeSlot);
      timeSlot = new Date(timeSlot.getTime() + 30 * 60 * 1000); // plus 30 minutes
    }
    return timeSlots;
  };
  
  const TimeDropdown = ({ time, setTime }) => {
    const timeSlots = getTimeSlots();
    return (
      <Listbox value={time.getTime()} onChange={(t) => setTime(new Date(t))}>
        <ListboxButton className="bg-sky-100 py-3 px-5 rounded w-full text-left">
          <span className="italic text-xs mr-7 min-w-10 inline-block">Time</span>
          <span>{formatTime(time)}</span>
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          className="shadow-xl rounded box-content p-2 bg-slate-50 mt-2 w-80 h-60 "
        >
          {timeSlots.map((t) => (
            <ListboxOption
              key={t.getTime()}
              value={t.getTime()}
              className="rounded bg-slate-50 border-slate-300 border-2 py-2 m-2 px-4 text-sm  data-[focus]:border-sky-500 data-[focus]:text-sky-500 data-[active]:border-sky-700 shadow-sm"
            >
              {formatTime(t)}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    );
  };
  
  export default TimeDropdown;