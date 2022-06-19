import React from "react";
import styles from "../../styles/Main.module.css";
import pullover from "../../assets/pulloverImg.png";
import skirt from "../../assets/skirtImg.png";

function Main() {
  return (
    <div className={styles.main}>
      <div className="flex items-end justify-around">
        {/* name + add button */}
        <div></div>

        {/* outfit breakdown cards */}
        <div className="flex flex-col w-1/3 px-6 py-20 ">
          {/* top */}
          <div className="rounded-md p-4">
            {/* name and price */}
            <div className="flex flex-col items-start justify-between">
              <div>Half Dome Pullover</div>
              <div className="text-tp font-extrabold">$87</div>
            </div>
            {/* image */}
            <img src={pullover} />
          </div>
          {/* bottom */}
          <div className="rounded-md p-4">
            {/* name and price */}
            <div className="flex flex-col items-start justify-between">
              <div>Half Dome Pullover</div>
              <div className="text-tp font-extrabold">$87</div>
            </div>
            {/* image */}
            <img src={pullover} />
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Main;
