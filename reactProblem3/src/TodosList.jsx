import { useState } from "react";

const TodosListItem = ({ data, func }) => {
  // const [check, setCheck] = useState(false);
  return (
    <li className="todosItem">
      <input
        type="checkbox"
        onChange={() => {
          func.edit({ ...data, checked: !data.checked });
        }}
      />
      <span style={{ textDecorationLine: data.checked ? "line-through" : "" }}>
        {data.id}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {data.text}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </span>
      <button>수정</button>
      <button
        onClick={() => {
          func.remove(data.id);
        }}
      >
        삭제
      </button>
    </li>
  );
};

const TodosList = (props) => {
  return (
    <ul className="todosList">
      {props.data.map((e) => (
        <TodosListItem key={e.id} data={e} func={props.func} />
      ))}
    </ul>
  );
};

export default TodosList;
