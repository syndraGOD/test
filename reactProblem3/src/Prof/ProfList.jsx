import ProfData from "../assets/api/ProfData";

const ProfItem = ({ item, func, current }) => {
  return (
    <li className="profItem">
      <div className="imgBox" onClick={() => func.selectRadio(item.id)}>
        <img
          className={current === item.id ? "on" : ""}
          src={item.imgSrc}
          alt={item.name}
          width={250}
        />
      </div>
    </li>
  );
};

const ProfList = ({ data, func }) => {
  const { ProfData, current, addFriend } = data;
  return (
    <>
      {/* <p style={{ fontSize: "30px" }}>
        {ProfData[current - 1].name} {current}/{ProfData.length}
      </p> */}
      <img class="subBanner" src={ProfData[current - 1].imgSrc} alt="" />
      <ul className="profList">
        {ProfData.map((item) => (
          <ProfItem key={item.id} item={item} func={func} current={current} />
        ))}
      </ul>
    </>
  );
};

export default ProfList;
