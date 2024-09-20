const ProfDetail = ({ item }) => {
  console.log(item);
  return (
    <div className="profDetail">
      <img src={item.imgSrc} alt="" />
      <h2>이름 : {item.name}</h2>
      <h2>나이 : {item.age}</h2>
      <p>{item.desc}</p>
    </div>
  );
};

export default ProfDetail;
