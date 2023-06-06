import { useSelector } from "react-redux";

const CartInventory = () => {
  const SelectedItems = useSelector((state: any) => state.cartItem.cart);

  const displaySummary = () => {
    const itemNames = SelectedItems.map((item: any) => item.strMeal);
    alert(`Cart Summary:\n${itemNames.join("\n")}`);
  };

  return (
    <div>
      <button onClick={displaySummary}>Check Out</button>
      {SelectedItems.map((item: any, index: number) => (
        <div key={index}>
          <p>name: {item.strMeal}</p>
          <img src={item.strMealThumb} alt="" style={{ width: "200px" }} />
        </div>
      ))}
    </div>
  );
};

export default CartInventory;
