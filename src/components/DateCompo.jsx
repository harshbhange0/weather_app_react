import React, { useEffect, useState } from "react";

function DateCompo() {
  const [hour, setHour] = useState("00");
  const [min, setMin] = useState("00");
  const [ampm, setAmPm] = useState("~");

  useEffect(() => {
    const timer = setInterval(() => {
      const currentDate = new Date();
      const currentHour = currentDate.getHours();
      const currentMin = currentDate.getMinutes();
      const isPM = currentHour >= 12;
      const formattedHour = (currentHour % 12) || 12;
      setHour(formattedHour.toString().padStart(2, "0"));
      setMin(currentMin.toString().padStart(2, "0"));
      setAmPm(isPM ? "PM" : "AM");
    }, 1000); // Update every second

    return () => {
      clearInterval(timer);
    };
  }, []);

  const getDate = () => {
    const dateData = new Date();
    const options = { weekday: "short", day: "2-digit", month: "2-digit", year: "numeric" };
    return dateData.toLocaleDateString(undefined, options);
  };

  return (
    <div className="time_date_holder">
      <div className="time_holder">
        {hour}:{min} {ampm}
      </div>
      <div className="date_holder">{getDate()}</div>
    </div>
  );
}

export default DateCompo;
