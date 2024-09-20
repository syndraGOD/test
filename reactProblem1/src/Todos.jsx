import { useRef, useState } from "react";
import TodosList from "./TodosList";

let idIndex = 2;
const Todos = () => {
  const [data, setData] = useState([
    { id: 1, text: "Hello, i m test", checked: false },
  ]);
  const inputE1 = useRef(null);
  const [inputValue, setInputValue] = useState("");

  const changeInput = (e) => {
    setInputValue(e.target.value);
  };

  const Todosfunc = {
    edit: (obj) => {
      // console.log(obj);
      setData([...data].map((item) => (item.id === obj.id ? obj : item)));
    },
    Add: (texts) => {
      if (!texts.trim()) return;
      setData([...data, { id: idIndex, text: texts }]);
      idIndex++;
      setInputValue("");
      inputE1.current.focus();
    },
    remove: (id) => {
      setData(data.filter((e) => e.id !== id));
    },
  };

  return (
    <div className="todos">
      <input
        type="text"
        placeholder="오늘의 Task"
        value={inputValue}
        onChange={changeInput}
        ref={inputE1}
      />
      <button onClick={() => Todosfunc.Add(inputValue)}>추가</button>
      <TodosList data={data} func={Todosfunc} />
    </div>
  );
};

export default Todos;
