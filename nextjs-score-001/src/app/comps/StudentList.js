// props로 studentList를 받음
const StudentList = ({ studentList }) => {
  const viewList = studentList.map((item) => <li key={item.st_num}>{item.st_name}</li>);
  return (
    <>
      <h1>학생리스트</h1>
      <ul>{viewList}</ul>
    </>
  );
};
export default StudentList;
