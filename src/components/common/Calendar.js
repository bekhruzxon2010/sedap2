import React from "react";
import Image from "next/image";

function Calendar() {
  return (
    <div>
      <div>
        <Image src="/greencalendar.png" alt="Green" width={20} height={20} />
        <select>
          <option>Today</option>
          <option>Today1</option>
        </select>
      </div>
    </div>
  );
}

export default Calendar;
