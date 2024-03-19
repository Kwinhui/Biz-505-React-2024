const ScoreList = ({ scoreList }) => {
  // 복합키이기때문에 item.s_score, item.s_stnum 을 두개 씀 순서 상관 x
  const viewList = scoreList.map((item) => <li key={`${(item.s_score, item.s_stnum)}`}>{`${item.s_stnum}, ${item.s_score}`}</li>);
  return (
    <>
      <h1>성적리스트</h1>
      <ul>{viewList}</ul>
    </>
  );
};
export default ScoreList;
