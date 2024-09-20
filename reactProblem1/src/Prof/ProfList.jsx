import ProfData from "../assets/api/ProfData";

const ProfItem = ({ item, func, current }) => {
  return (
    <li className="profItem">
      <div className="imgBox">
        <img src={item.imgSrc} alt={item.name} width={250} />
      </div>
      <div className="textBox">
        <p>이름: {item.name}</p>
        <p>나이: {item.age}</p>
      </div>
      <div className="radioBox">
        <input
          type="radio"
          name=""
          id=""
          checked={item.id === current}
          onChange={() => func.selectRadio(item.id)}
        />
      </div>
    </li>
  );
};

const ProfList = ({ data, func }) => {
  const { ProfData, current, addFriend } = data;
  return (
    <ul className="profList">
      <div className="header">
        <p>친구들 총 인원: {ProfData.length}</p>
        <div className="checkbox">
          <input
            type="checkbox"
            name=""
            id=""
            onChange={func.addFriendToggle}
          />

          {addFriend ? <span>활성</span> : <span>비활성</span>}
        </div>
      </div>

      {ProfData.map((item) => (
        <ProfItem key={item.id} item={item} func={func} current={current} />
      ))}
    </ul>
  );
};

export default ProfList;
