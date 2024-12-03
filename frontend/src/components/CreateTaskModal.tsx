import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Input,
} from "@headlessui/react";
import { CloseIcon } from "../icons";
import CustomSelect from "./CustomSelect";
import { useState } from "react";

interface props {
  isOpen: boolean;
  onClose: () => void;
}

const restaurants = [
  { value: "mcdonalds", label: "McDonald's" },
  { value: "kfc", label: "KFC" },
  { value: "burger-king", label: "Burger King" },
  { value: "subway", label: "Subway" },
  { value: "dominos", label: "Domino's Pizza" },
];

const sizes = [
  { value: "small", label: "Small" },
  { value: "medium", label: "Medium" },
  { value: "large", label: "Large" },
  { value: "extra-large", label: "Extra Large" },
];

const profiles = [
  { value: "1", label: "Jhon 1" },
  { value: "2", label: "Profile 2" },
  { value: "3", label: "Profile 3" },
];

const CreateTaskModal = ({ isOpen, onClose }: props) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(restaurants[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [selectProfile, setSelectProfile] = useState(profiles[0]);

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 flex w-screen items-center justify-center bg-black/40 backdrop-blur-md">
        <DialogPanel className="relative max-w-[678px] w-full space-y-12 bg-modal backdrop-blur-[100px] rounded-2xl border border-brand-main p-12">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-semibold text-brand-gray">Create New Task</DialogTitle>
            <button onClick={onClose}>
              <CloseIcon />
            </button>
          </div>
          <div className="space-y-5">
            <div>
              <label className="text-brand-gray" htmlFor="restaurant">Restaurant</label>
              <CustomSelect onChange={setSelectedRestaurant} value={selectedRestaurant} options={restaurants} />
            </div>
            <div className="grid md:grid-cols-10 gap-5 w-full">
              <div className="col-span-3">
                <label className="text-brand-gray" htmlFor="date">Date</label>
                <Input className="bg-brand-black border border-brand-black-200 px-4 h-[60px] w-full text-left rounded-xl text-brand-black-200 mt-2" placeholder="DD/MM/YYYY" />
              </div>
              <div className="col-span-2">
                <label className="text-brand-gray" htmlFor="time">Time</label>
                <Input className="bg-brand-black border w-full border-brand-black-200 px-4 h-[60px] text-left rounded-xl text-brand-black-200 mt-2" placeholder="-- : --" />
              </div>
              <div className="col-span-5">
                <label className="text-brand-gray" htmlFor="size">Table Size</label>
                <CustomSelect onChange={setSelectedSize} value={selectedSize} options={sizes} />
              </div>
            </div>
            <div className="col-span-3">
              <label className="text-brand-gray" htmlFor="profile">Select Profile</label>
              <CustomSelect onChange={setSelectProfile} value={selectProfile} options={profiles} icon={true} />
            </div>
          </div>
          <button className="w-full rounded-full bg-brand-main text-center text-lg text-white py-4" onClick={onClose}>Create Task</button>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default CreateTaskModal;
