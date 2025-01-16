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
  // iconType = "faded",
  extraSpacing = true,
}) => (
  <li className={`relative left-[-3.25rem] flex items-start gap-6 ${extraSpacing ? "mt-12" : "mt-6"} timeline-item`}>
    {/* Icon */}
    <span
      className={`absolute flex my-auto items-center justify-center w-10 h-10 rounded-full bg-white
        `}
    >
      {icon}
    </span>
    {/* Content */}
    <div className="ml-12 pl-4">{description}</div>
    {extraContent && <div className="mt-4">{extraContent}</div>}
  </li>
);



export default TimelineItem;