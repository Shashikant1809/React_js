import React from "react";
import propTypes from "prop-types";

const Student = (props) => {
  return (
    <div>
      <h1>
        The name of the student is {props.name} and he is studying in{" "}
        {props.college}
      </h1>
      {console.log(props)}
    </div>
  );
};

Student.propTypes = {
  name: propTypes.string,
  college: propTypes.string,
};

Student.defaultProps = {
  name: "Name",
  college: "College",
};

// const Student = ({ name, college }) => {
//     return (
//       <div>
//         <h1>
//           The name of the student is {name} and he is studying in {college}
//         </h1>
//         {/* {console.log(props)}  */}
//       </div>
//     );
//   };

export default Student;
