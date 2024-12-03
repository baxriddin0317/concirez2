import React from "react";
import task1 from "../assets/task-1.png";
import task2 from "../assets/task-2.png";
import task3 from "../assets/task-3.png";
import { ProfileIcon } from "../icons";

interface TaskCardProps {
  title: string;
  profile: string;
  date: string;
  time: string;
  logo: string;
}

const tasks = [
  {
    id: 1,
    title: "Hells Kitchen",
    profile: "Profile 1",
    date: "April 25, 2024",
    time: "07:17:57 AM",
    logo: task1,
  },
  {
    id: 2,
    title: "Hells Kitchen",
    profile: "Profile 3",
    date: "April 21, 2024",
    time: "07:17:57 AM",
    logo: task2,
  },
  {
    id: 3,
    title: "MasterChef",
    profile: "Profile 2",
    date: "March 15, 2024",
    time: "05:45:00 PM",
    logo: task3,
  },
  {
    id: 4,
    title: "The Great Bake-Off",
    profile: "Profile 5",
    date: "February 10, 2024",
    time: "03:30:25 PM",
    logo: task2,
  },
  {
    id: 5,
    title: "Hells Kitchen",
    profile: "Profile 4",
    date: "January 20, 2024",
    time: "09:15:10 AM",
    logo: task1,
  },
];

const RecentCompleted = () => {
  return (
    <div className="bg-main-gradient border border-brand-black-100 rounded-2xl w-full p-4 lg:p-6">
      <h3 className="text-lg text-white">Recent Completed Tasks</h3>

      <div className="mt-6 space-y-3 max-h-[340px] overflow-auto">
        {tasks.map((task) => (
          <RecentCard
            key={task.id}
            title={task.title}
            profile={task.profile}
            date={task.date}
            time={task.time}
            logo={task.logo}
          />
        ))}
      </div>
    </div>
  );
};

const RecentCard = ({ title, profile, date, time, logo }: TaskCardProps) => {
  return (
    <div className="flex items-center justify-between bg-main-gradient border border-brand-black-100 rounded-2xl overflow-hidden h-20 px-4">
      <div className="flex items-center gap-4">
        <img
          src={logo}
          alt={title}
          className="w-12 h-12 rounded-md object-cover"
        />
        <div>
          <h3 className="text-brand-gray font-medium">{title}</h3>
          <div className='flex items-center gap-1.5'>
            <ProfileIcon fill="#6B6B6B" />
            <span className="text-[#6B6B6B] pt-0.5">{profile}</span>
          </div>
        </div>
      </div>
      <div className="text-right text-xs text-brand-black-100">
        <p>{date}</p>
        <p>{time}</p>
      </div>
    </div>
  );
};

export default RecentCompleted;
