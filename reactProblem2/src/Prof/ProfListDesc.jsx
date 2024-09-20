import React from "react";
import Prof from "./Prof";

const ProfListDesc = ({ data }) => {
  const { ProfData, current, addFriend } = data;

  return (
    <ul>
      {ProfData.map((item) => {
        return (
          <li
            style={{
              fontSize: "20px",
              background: "#e0e0e0",
              margin: "10px 0px",
            }}
            key={item.id}
          >
            <p>{item.name}</p>
            {current === item.id ? (
              <p style={{ background: "white" }}>{item.name}입니다.</p>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
};

export default ProfListDesc;
