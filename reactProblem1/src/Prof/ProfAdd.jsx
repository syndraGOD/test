import { useRef } from "react";

const ProfAdd = ({ func }) => {
  const name = useRef();
  const age = useRef();
  const imgSrc = useRef();
  return (
    <div className="qwer">
      <label>
        이름 <input ref={name} type="text" value="유재석" />
      </label>
      <label>
        나이 <input ref={age} type="text" value="45" />
      </label>
      <label>
        주소 <input ref={imgSrc} type="text" value="img/test.png" />
      </label>
      <button
        onClick={() =>
          func.addFriendData({
            name: name.current.value,
            age: age.current.value,
            imgSrc: imgSrc.current.value,
          })
        }
      >
        추가
      </button>
    </div>
  );
};

export default ProfAdd;
