import { useRef, useState } from "react";
import ProfList from "./ProfList.jsx";
import ProfListDesc from "./ProfListDesc.jsx";
import ProfAdd from "./ProfAdd";
import ProfDetail from "./ProfDetail";
import ProfData from "../assets/api/ProfData.jsx";
import "./Prof.scss";
const Prof = () => {
  const [data, setData] = useState({
    ProfData,
    addFriend: false,
    current: 1,
  });
  const func = {
    addFriendToggle: () => setData({ ...data, addFriend: !data.addFriend }),
    addFriendData: ({ name, age, imgSrc }) => {
      console.log(name, age, imgSrc);
      setData({
        ...data,
        ProfData: [
          ...data.ProfData,
          {
            id: data.ProfData.length + 1,
            name,
            age,
            desc: ["아 뭐하지", "안녕하세요", "그래그래"],
            imgSrc,
          },
        ],
      });
    },
    selectRadio: (props) => setData({ ...data, current: props }),
    isLikeToggle: () => {
      const newData = data.ProfData.map((item) =>
        item.id === data.current ? { ...item, isLike: !item.isLike } : item
      );
      setData({ ...data, ProfData: newData });
    },
  };
  return (
    <div className="prof">
      <div className="leftPage">
        <ProfList data={data} func={func} />
        {/* {data.addFriend ? <ProfAdd func={func} /> : null} */}
      </div>
      <div className="rightPage">
        <ProfListDesc data={data} func={func} />
      </div>
    </div>
  );
};

export default Prof;
