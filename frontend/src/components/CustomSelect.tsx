import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ArrowDown, ProfileIcon } from "../icons";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  value: SelectOption;
  onChange: (value: SelectOption) => void;
  icon?: boolean
}

const CustomSelect = ({ options, value, onChange, icon }: SelectProps) => {
  return (
    <div className="w-full mt-2">
      <Listbox value={value} onChange={onChange}>
        {({ open }) => (
          <>
            <div className="relative">
              <Listbox.Button className="relative flex items-center w-full cursor-default bg-brand-black border border-brand-black-200 px-4 h-[60px] text-left rounded-xl text-brand-black-200">
                {icon && <ProfileIcon size="24" />}
                <span className="block truncate ml-4">{value.label}</span>
                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center pr-2">
                  <ArrowDown />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {options.map((option) => (
                    <Listbox.Option
                      key={option.value}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? "bg-brand-black text-white" : "text-gray-900"
                        }`
                      }
                      value={option}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {option.label}
                          </span>
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  )
}

export default CustomSelect