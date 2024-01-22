import React from "react";

const SocialIcons = ({ Icons }) => {
  return (
    <div className="text-gray-100">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-red-500
        duration-300 "
        >
          {/* <ion-icon name={icon.name}></ion-icon> */}
          <a>{icon.component}</a>
        </span>
      ))}
    </div>
  );
};

export default SocialIcons;