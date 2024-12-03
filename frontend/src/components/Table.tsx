import React from 'react'
import task1 from "../assets/task-1.png"
import task2 from "../assets/task-2.png"
import task3 from "../assets/task-3.png"
import { PlayIcon, ProfileIcon, RemoveIcon } from '../icons'

const data = [
  {
    id: 1,
    restaurant: "Hells Kitchen",
    profile: "Profile 1",
    dateTime: "May 25, 2024 / 07:17:57 AM",
    logo: task1,
  },
  {
    id: 2,
    restaurant: "Nusr Et",
    profile: "Profile 3",
    dateTime: "May 26, 2024 / 08:17:57 AM",
    logo: task2,
  },
  {
    id: 3,
    restaurant: "Shabu Hachi",
    profile: "Profile 3",
    dateTime: "May 27, 2024 / 08:17:57 AM",
    logo: task3,
  },
  {
    id: 4,
    restaurant: "Hells Kitchen",
    profile: "Profile 1",
    dateTime: "May 27, 2024 / 07:17:57 AM",
    logo: task1,
  },
  {
    id: 5,
    restaurant: "Nusr Et",
    profile: "Profile 3",
    dateTime: "May 26, 2024 / 08:17:57 AM",
    logo: task2,
  },
  {
    id: 6,
    restaurant: "Shabu Hachi",
    profile: "Profile 3",
    dateTime: "May 27, 2024 / 08:17:57 AM",
    logo: task1,
  },
  {
    id: 7,
    restaurant: "Hells Kitchen",
    profile: "Profile 1",
    dateTime: "May 27, 2024 / 07:17:57 AM",
    logo: task2,
  },
  {
    id: 8,
    restaurant: "Nusr Et",
    profile: "Profile 3",
    dateTime: "May 26, 2024 / 08:17:57 AM",
    logo: task2,
  },
  {
    id: 9,
    restaurant: "Shabu Hachi",
    profile: "Profile 3",
    dateTime: "May 27, 2024 / 08:17:57 AM",
    logo: task2,
  },
  {
    id: 10,
    restaurant: "Hells Kitchen",
    profile: "Profile 1",
    dateTime: "May 27, 2024 / 07:17:57 AM",
    logo: task3,
  },
];

const Table = () => {

  return (
    <div className="bg-transparent text-brand-gray rounded-lg shadow-lg lg:max-w-[674px] w-full overflow-x-auto">
      <table className="min-w-[552px] w-full border-separate border-spacing-y-3">
        <thead>
          <tr className=''>
            <th className="text-left pl-5 py-1">Restaurant</th>
            <th className="text-left">Profile</th>
            <th className="text-left">Date/Time</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="bg-main-gradient rounded-2xl overflow-hidden h-20"
            >
              <td className="pl-5 border-y border-l rounded-l-2xl border-brand-black-100">
                <div className='flex items-center gap-3'>
                  <div className='relative w-12 h-12 rounded overflow-hidden'>
                    <img className="absolute inset-0 object-cover" src={item.logo} alt={item.restaurant} />
                  </div>
                  <h4 className="">
                  Hells Kitchen
                  </h4>
                </div>
              </td>
              <td className="border-y border-brand-black-100">
                <div className='flex items-center gap-1.5'>
                  <ProfileIcon />
                  <span>{item.profile}</span>
                </div>
              </td>
              <td className="border-y border-brand-black-100">{item.dateTime}</td>
              <td className="border-y border-r rounded-r-2xl border-brand-black-100 pr-5">
                <div className=' flex items-center justify-center space-x-4'>
                  <button className="">
                    <PlayIcon />
                  </button>
                  <button className="">
                    <RemoveIcon />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table