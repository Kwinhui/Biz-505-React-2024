const MemoList = ({ memoList, viewList }) => {
  return (
    <ul>
      <li>{viewList}</li>
    </ul>
  );
};

export default MemoList;

// const MemoList = ({ memoList, viewList }) => {
//   return (
//     <ul>
//       <li>{viewList}</li>
//     </ul>
//   );
// };

// export default MemoList;

// import MemoItem from "./MemoItem";
// const MemoList = ({ memoList }) => {
//   const viewList = memoList.map((item) => <MemoItem item={item} key={item.seq} />);
//   return (
//     <>
//       <ul>
//         <li>{viewList}</li>
//       </ul>
//     </>
//   );
// };

// export default MemoList;
