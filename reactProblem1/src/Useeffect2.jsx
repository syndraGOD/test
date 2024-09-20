import { useEffect, useState } from "react";

const Sub = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  //화면에 그려진 후 마우스 이동 - 위치값
  // 오직 한번만 []
  const onMove = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMove);
    return () => {
      console.log("뒷정리");
      window.removeEventListener("mousemove", onMove);
    };
  });

  return (
    <div
      style={{
        border: "1px solid #000",
        padding: 20,
        margin: 30,
        fontSize: 40,
        textAlign: "center",
      }}
    >
      x : {x}y : {y}
    </div>
  );
};

const Useeffect2 = () => {
  const [isShow, setIsShow] = useState(false);
  const onShow = () => {
    setIsShow(true);
  };
  const onHide = () => {
    setIsShow(false);
  };
  return (
    <div>
      <p>
        <button onClick={onShow}>보이기</button>
        <button onClick={onHide}>숨기기</button>
      </p>
      {isShow ? <Sub /> : null}
    </div>
  );
};

export default Useeffect2;
