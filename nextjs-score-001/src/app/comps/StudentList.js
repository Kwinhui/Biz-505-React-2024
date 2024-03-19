import css from "@/css/studentList.module.css";
// props로 studentList를 받음
const StudentList = ({ studentList, setStudent }) => {
  const viewList = studentList.map((item) => (
    // 학생정보 한명에 대한 item
    <li key={item.st_num} className={css.item} onClick={() => setStudent(item)}>
      <strong>{item.st_num}</strong>
      <strong>{item.st_name}</strong>
      <span>{item.st_dept}</span>
    </li>
  ));
  return (
    <>
      <ul>
        <li className={`${css.item} ${css.title}`}>
          <strong>학번</strong>
          <strong>이름</strong>
          <span>학과</span>
        </li>
        {viewList}
      </ul>
    </>
  );
};
export default StudentList;
