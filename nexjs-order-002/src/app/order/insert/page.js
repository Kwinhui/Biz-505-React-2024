"use client";
import { useCallback, useEffect, useState } from "react";

import css from "@/css/order.insert.module.css";
import { findByCustomer } from "@/app/api/customer";
import CustomSearch from "./CustomSearch";
import { getOrderListByPcode } from "@/app/api/order";
import { findByPName } from "@/app/api/product";
import ProductSearch from "./ProductSearch";
const OrderInsert = () => {
  // const [customer, setCustomer] = useState([]);
  // useEffect(() => {
  //   const getCustomerList = async () => {
  //     const result = await findBynum("C0010");

  //     setCustomer(result);
  //   };
  //   getCustomerList();
  // }, []);
  // const viewList = customer.map((customer) => (
  //   <li key={customer.c_code}>{customer.c_code}</li>
  // ));
  // const viewList = customer.map((customer) => (
  //   <>
  //     <li key={customer.c_code}>고객코드 : {customer.c_code}</li>
  //     <li>고객이름 : {customer.c_name}</li>
  //   </>
  // ));

  const [search, setSearch] = useState("");
  const [customList, setCustomList] = useState([]);
  const [customer, setCustomer] = useState("");
  const [orderList, setOrderList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [product, setProduct] = useState("");
  /**
   * useCallback()
   * State 생성 영역(컴포넌트 함수내의 return 명령 이전의 영역)에
   * 선언하는 함수는 잘못하면 메모리 누수(Memory Leak)을 일으킬수 있다.
   * state 를 사용하여 화면에 어떤 변화를 주는 코드를 작성했을때,
   * 작은부분에서 state 의 변동은 화면에는 거의 움직임이 없이 처리가 된다.
   * 하지만, State 영역에 선언된 함수는 State 가 변화되는
   * 짧은 시간동안 계속해서 함수를 선언, 생성하는 동작이 반복된다.
   * 이미 함수를 만들어서 사용하고 있음에도 불구하고
   * 무시하고 새로 생성을 하게 된다. 이런 과정에서 사용하지 않는
   * 함수의 선언값이 메모리에 남게 되고 메모리 누수가 발생한다.
   * 함수를 useCallback 으로 감싸주면 이미 만들어진 함수를 재활용한다.
   *
   */
  const customChangeHandler = useCallback(async (e) => {
    // 키보드로 입력한 문자열을 받아서
    const search = e.target.value;
    // console.log(search);
    if (search) {
      // findByCustomer 에게 search 전달함
      const result = await findByCustomer(search);
      setCustomList([...result]);
    } else {
      setCustomList([]);
    }
  });

  useEffect(() => {
    const fetchOrder = async () => {
      if (customer && customer?.c_code) {
        const result = await getOrderListByPcode(customer.c_code);
        setOrderList([...result]);
      }
    };
    fetchOrder();
  }, [customer]);
  // customer 가 변경되면 findByCcode 한테 data를 가져와서 orderList에 출력해달라

  /**
   * 상품검색 input Box 에 상품이름을 입력하면
   * tbl_product 에서 상품정보를 fetch 하고
   * 상품검색 input Box 아래에 목록을 보여주는 코드 작성
   */

  const productChangeHandler = useCallback(async (e) => {
    const product = e.target.value;
    console.log("결과 : ", product);
    if (product) {
      const result = await findByPName(product);
      setProductList([...result]);
    } else {
      setProductList([]);
    }
  });
  useEffect(() => {
    const fetchProduct = async () => {
      if (product && product?.p_name) {
        const result = await findByPName(product.p_name);
        setProductList([...result]);
      }
    };
    fetchProduct();
  }, [product]);

  return (
    <article className={css.main}>
      <form className={css.form}>
        <div className={css.custom}>
          <input onChange={customChangeHandler} placeholder="고객정보" defaultValue={search} />

          {customList.length > 0 && <CustomSearch customList={customList} setCustomList={setCustomList} setCustomer={setCustomer} />}

          {customer && (
            <ul>
              <li>고객코드 : {customer.c_code}</li>
              <li>고객이름 : {customer.c_name}</li>
              <li>전화번호 : {customer.c_tel}</li>
            </ul>
          )}
        </div>
        <div className="product">
          <input placeholder="상품검색" onChange={productChangeHandler} defaultValue={search} />
          {productList.length > 0 && <ProductSearch productList={productList} setProductList={setProductList} setProduct={setProduct} />}

          {product && (
            <ul>
              <li>상품코드 : {product.p_code}</li>
              <li>상품이름 : {product.p_name}</li>
              <li>가격 : {product.p_price}</li>
            </ul>
          )}

          <input placeholder="주문수량" />
          <button>상품추가</button>
        </div>
      </form>
      <div>
        <h3>주문목록</h3>
        <ul className={css.product_list}>
          {orderList.map((order) => (
            <li>
              <p>
                {order.o_num},{order.o_date}
                <ul className={css.product}>
                  {order.products.map((item) => (
                    <li>
                      {item.op_pcode}, {item.product.p_name},{item.product.p_price},{item.product.p_item}
                    </li>
                  ))}
                </ul>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default OrderInsert;
