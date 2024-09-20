import { useEffect } from "react";
import { useState } from "react";

const Useeffect3 = () => {
  const [cnt, setCnt] = useState(1);
  useEffect(() => {
    console.log("useeffect");
    const timer = setInterval(() => {
      console.log("setInterval");
      //   setCnt(cnt + 1);
      setCnt((state) => state + 1);
    }, 1000);
    return () => {
      console.log("뒷정리");
      clearInterval(timer);
    };
  }, []);
  //타이머가 나오면 꼭 뒷정리

  //시간 []
  return (
    <div>
      <h2>주로 자식 컴포넌트에 작성</h2>
      <h3>카운트 : {cnt}</h3>
      <p>1초마다 1씩 증가</p>
    </div>
  );
};

export default Useeffect3;
