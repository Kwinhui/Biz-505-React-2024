import css from "@/css/score.list.module.css";
const ScoreList = ({ scoreList }) => {
  let scoreTotal = 0;

  // 복합키이기때문에 item.s_score, item.s_stnum 을 두개 씀 순서 상관 x
  const viewList = scoreList.map((item, index) => {
    scoreTotal += item.s_score;
    return (
      <li key={index} className={css.item}>
        <strong>
          {item.s_stnum},{item.s_subject}
        </strong>
        <span>{item.s_score}</span>
      </li>
    );
  });

  return (
    <>
      {/* <ul>{st_name}</ul> */}
      <ul className={css.body}>
        {viewList}
        <li className={`${css.item} ${css.strong}`}>
          <strong>총점</strong>
          <span>{scoreTotal}</span>
        </li>
        <li className={`${css.item} ${css.strong}`}>
          <strong>평균</strong>
          <span>{Math.round(scoreTotal / scoreList.length, 0)}</span>
        </li>
      </ul>
    </>
  );
};
export default ScoreList;
