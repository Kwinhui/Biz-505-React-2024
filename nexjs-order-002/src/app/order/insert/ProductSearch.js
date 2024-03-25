import css from "@/css/order.insert.module.css";

const ProductSearch = ({ productList, setProductList, setProduct }) => {
  const onClickHandler = (product) => {
    // alert(`${product.p_code} ${product.p_name}`);
    setProduct(product);
    setProductList([]);
  };

  const viewList = productList.map((item) => (
    <li key={item.p_code} onClick={() => onClickHandler(item)}>
      {item.p_name}
    </li>
  ));
  return <ul className={css.pro_list}>{viewList}</ul>;
};
export default ProductSearch;
