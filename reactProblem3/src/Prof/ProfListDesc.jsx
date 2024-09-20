import React from "react";
import Prof from "./Prof";

const ProfListDesc = ({ data, func }) => {
  const { ProfData, current, addFriend } = data;
  const crt = ProfData[current - 1];
  return (
    <ul>
      <li>
        <p>커피같은 {crt.name}</p>
        <p>달달한 {crt.age}세</p>
        <p style={{ margin: "20px 0px", borderBottom: "1px solid #000" }}></p>
        <p>{crt.desc}</p>
        <button
          onClick={func.isLikeToggle}
          style={{ border: "1px solid #000" }}
        >
          나만의 음료 등록 {crt.isLike ? "♥" : "♡"}
        </button>
      </li>
    </ul>
  );
};

export default ProfListDesc;
