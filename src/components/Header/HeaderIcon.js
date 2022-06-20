import React from "react";

function HeaderIcon({ Icon,active }) {
  return (
    <div className="flex items-center cursor-pointer active:border-b-5 active:border-blue-600 sm:h-14 md:hover:bg-gray-100 rounded-xl group">
      <Icon className= {`h-5 text-gray-500 text-center sm:h-7 mx-auto group-hover:text-gray-900 ${active && "text-sd"}` }/>
    </div>
  );
}

export default HeaderIcon;
