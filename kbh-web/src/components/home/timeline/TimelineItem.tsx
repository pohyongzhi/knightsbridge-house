import React from "react";

export interface TimelineItemProps {
  icon: React.ReactNode;
  description: React.ReactNode;
  extraContent?: React.ReactNode;
  iconType?: "avatar" | "filled" | "faded";
  extraSpacing?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  icon,
  description,
  extraContent,
  iconType = "faded",
  extraSpacing = false,
}) => (
  <li className={`relative left-[-3.25rem] flex items-start gap-6 ${extraSpacing ? "mt-12" : "mt-6"} timeline-item`}>
    {/* Icon */}
    <span
      className={`absolute flex items-center justify-center w-10 h-10 rounded-full 
        ${iconType === "avatar"
        ? ""
        : iconType === "filled"
          ? "bg-blue-500 text-white"
          : "bg-gray-100 text-gray-400"
        }`}
    >
      {icon}
    </span>
    {/* Content */}
    <div className="ml-12 pl-4">{description}</div>
    {extraContent && <div className="mt-4">{extraContent}</div>}
  </li>
);



export default TimelineItem;