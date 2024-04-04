import { Typography } from "antd";

const { Title } = Typography;

const totalPriceCart = {
  margin: "50px 0 50px 0px",
  display: "flex",
  justifyContent: "center",
};

export default function TotalPriceCart(props) {
  let getSumPrice = [];
  let getCart = [];
  let totalPrice = "";
  if (props.argument.length === 0) {
    getCart = 0;
    totalPrice = `Start shopping`;
  }

  if (props.argument.length > 0) {
    getSumPrice = props.argument.map((el) => el.price);
    getCart = getSumPrice.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    totalPrice = `Your cart amount: ${getCart.toFixed(2)}$`;
  }

  return (
    <>
      <Title style={totalPriceCart} level={3}>
        {totalPrice}
      </Title>
    </>
  );
}
