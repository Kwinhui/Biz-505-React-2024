"use client";
import css from "@/css/order.main.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { selectAll } from "../api/order";

const OrderPage = () => {
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    const getOrderList = async () => {
      const result = await selectAll();
      // list가 안채워지는 경우가 있음
      // setOrderList(result)
      setOrderList([...result]);
    };
    getOrderList();
  }, []);

  const viewList = orderList.map((order) => (
    <li key={order.o_num}>
      {order.o_num}, {order.o_ccode}
    </li>
  ));

  return (
    <section className={css.main}>
      <ul className={css.list}>{viewList}</ul>
      <div className={css.link}>
        <Link href="/order/insert">주문서 추가</Link>
      </div>
    </section>
  );
};
export default OrderPage;
