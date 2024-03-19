"use client";
// import Image from "next/image";
// @는 src 폴더를 칭함
import styles from "@/css/page.module.css";
import StudentList from "./comps/StudentList";
import { useEffect, useState } from "react";
// import 한 selectAll 함수를 st_selectAll 이라는 이름으로 사용하겠다.
import { selectAll as st_selectAll } from "@/app/api/student";
import StudentDetail from "./comps/StudentDetail";
import ScoreList from "./comps/ScoreList";
import { findByStNum } from "./api/score";

export default function Home() {
  const [studentList, setStudentList] = useState([]);
  const [scoreList, setScoreList] = useState([]);
  useEffect(() => {
    const stdFetch = async () => {
      const result = await st_selectAll();
      if (result) setStudentList([...result]);
    };
    // 함수실행
    stdFetch();
  }, []);

  useEffect(() => {
    const scoreFetch = async () => {
      const result = await findByStNum("S0010");
      setScoreList([...result]);
    };
    scoreFetch();
  }, []);

  return (
    <main className={styles.main}>
      <section className={styles.list}>
        <StudentList studentList={studentList} />
      </section>
      <section className={styles.detail}>
        <StudentDetail>
          <ScoreList scoreList={scoreList} />
        </StudentDetail>
      </section>
    </main>
  );
}
