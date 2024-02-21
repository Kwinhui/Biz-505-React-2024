/**
 * 부모 컴포넌트로부터 2개의 props 를 전달받기
 *
 */
const View = ({ name, age }) => {
  // <></> 묶어주기 위한 tag
  // 다른곳에서 <div></div> 에 css를 적용했다면 css가 무너질수 있음
  return (
    <>
      <h2>이름 : {name} </h2>
      <h2>나이 : {age} </h2>
    </>
  );
};

export default View;
