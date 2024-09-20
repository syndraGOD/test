import { useEffect, useState } from "react";

const Useeffect4 = () => {
  const [count, setCount] = useState(1);
  const [step, setStep] = useState(1);
  const onUp = () => {};

  useEffect(() => {
    console.log("useEffect");
    const timer = setInterval(() => {
      setCount((cnt) => cnt + 1);
    }, 1000);
  }, []);

  return (
    <div>
      <h2>타이머 : </h2>
      <p>
        <input type="text" name="" id="" />
        <button onClick={onUp}>증가</button>
      </p>
      <span>1초 마다 1씩 증가</span>
      <span>버튼 input 증가값</span>
    </div>
  );
};

export default Useeffect4;
