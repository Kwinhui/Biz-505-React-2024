import { useParams } from "react-router-dom";

const TITLE = {
  notice: "공지사항",
  free: "자유게시판",
};

const BBsWritePage = () => {
  // router path 가 /bbs/:item/write 라고 되어 있을때
  // http://localhost:3000/bbs/Korea/write 라고 요청을 하면
  // item 이라는 변수에 Korea 라는 문자값이 담기고
  // useParams() 함수에서 해당 item 변수를 구조분해 하여 값을 추출할 수 있다
  const { item } = useParams();
  return <h1>{`${TITLE[item]} 글쓰기화면`}</h1>;
};

export default BBsWritePage;