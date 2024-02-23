import "../css/MemoSection.css";
import image from "../images/0001.jpg";
const MemoSection = ({ memoItem, setMemoItem }) => {
  const onChangeHandler = () => {
    setMemoItem();
  };
  const onSaveHandler = () => {
    alert("저장");
  };
  return (
    <div className="sectionMain">
      <section className="left">
        <div className="input">
          <input placeholder="2024-02-23"></input>
          <input placeholder="09:59:00"></input>
          <input type="button" value={"새로작성"}></input>
        </div>
        <ul>
          <li>
            <img src={image} width="20px"></img>
            설산에서 고행을
          </li>
          <li>
            <img src={image} width="20px"></img>
            없는 사막이다 보이는
          </li>
          <li>
            <img src={image} width="20px"></img>
            하는 온갖 과실이
          </li>
        </ul>
      </section>
      <section className="right">
        <div className="inputRight">
          <input placeholder="제목을 입력하세요" value={memoItem} onChange={onChangeHandler}></input>
          <input placeholder="메모를 입력하세요" value={memoItem} onChange={onChangeHandler}></input>
          <input type="file"></input>
          <input type="button" value={"저장"} onClick={onSaveHandler}></input>
        </div>
      </section>
    </div>
  );
};

export default MemoSection;
