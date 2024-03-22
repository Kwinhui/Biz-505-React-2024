"use client";
import { useEffect, useState } from "react";

import { findBynum } from "@/app/api/orderList";
import css from "@/css/input.module.css";
const OrderInsert = () => {
  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    const getCustomerList = async () => {
      const result = await findBynum("C0010");

      setCustomer(result);
    };
    getCustomerList();
  }, []);
  // const viewList = customer.map((customer) => (
  //   <li key={customer.c_code}>{customer.c_code}</li>
  // ));
  const viewList = customer.map((customer) => (
    <>
      <li key={customer.c_code}>고객코드 : {customer.c_code}</li>
      <li>고객이름 : {customer.c_name}</li>
    </>
  ));

  return (
    <section>
      <h1>주문번호 : O010001</h1>
      <form>
        <div>
          <div>
            <input placeholder="고객코드" />
            <button>검색</button>
            <ul>고객코드 : {viewList}</ul>
            <ul>고객이름 : {viewList}</ul>
            <ul>연락처 : {viewList}</ul>
          </div>
          <div>
            <input placeholder="상품코드" />
            <button>검색</button>
          </div>
          <div>
            <input placeholder="주문수량" />
            <button>상품추가</button>
          </div>
        </div>
      </form>
      <div>
        <h3>상품리스트</h3>
        <ul>
          <li>P0010</li>
          <li>P0010</li>
          <li>P0010</li>
        </ul>
      </div>
    </section>
  );
};

export default OrderInsert;
