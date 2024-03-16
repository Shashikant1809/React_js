import React from "react";
import { useParams } from "react-router-dom";
function Muser() {
  const { userid } = useParams();
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      User:{userid}
    </div>
  );
}
export default Muser;
