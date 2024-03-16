import React, { useEffect, useState } from "react";
function Github() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://github.com/hiteshchoudhary")
      .then((res) => {
        res.json();
      })
      .then((data) => {
        setdata(data);
      });
  }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl ">
      Github Followers:{data.follower}
    </div>
  );
}
export default Github;
