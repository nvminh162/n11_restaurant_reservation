import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Button } from "@headlessui/react";

const PersonDropdown = ({ count, setCount }) => {
  return (
    <Popover className="relative">
      <PopoverButton className="bg-sky-100 py-3 px-5 rounded w-full text-left">
        <span className="italic text-xs mr-7">People</span>
        <span> {count} persons</span>
      </PopoverButton>
      <PopoverPanel
        anchor="bottom"
        className="shadow-xl rounded box-content p-5 bg-slate-100 mt-2 w-80 flex justify-center"
      >
        {({ close }) => (
          <div className="grid grid-cols-5 gap-4">
            {[...Array(10).keys()].map((countOption) => (
              <Button
                key={countOption}
                onClick={() => {
                  setCount(countOption + 1);
                  close();
                }}
                className="rounded bg-slate-50 border-slate-300 border-2 py-2 px-4 text-sm  data-[hover]:border-sky-500 data-[hover]:text-sky-500 data-[active]:border-sky-700 shadow-sm"
              >
                {countOption + 1}
              </Button>
            ))}
          </div>
        )}
      </PopoverPanel>
    </Popover>
  );
};

export default PersonDropdown;
