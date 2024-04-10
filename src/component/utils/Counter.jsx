import { useState } from "react";
import React from "react";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Card, Image, Button, Typography, Col, Modal } from "antd";

export default function Counter(props) {
  // const [numberOfThings, setNumberOfThings] = useState(1);

  // const onClickShowItemPlus = () => {
  //   setNumberOfThings(numberOfThings + 1);
  // };
  // const onClickShowItemMinus = () => {
  //   if (numberOfThings > 1) {
  //     setNumberOfThings(numberOfThings - 1);
  //   }
  // };
  return (
    <div>
      <div>
        <Button
          type="text"
          size="large"
          onClick={() => props.onClickShowItemPlus()}
          // onClick={() => setNumberOfThings(numberOfThings + 1)}
        >
          <PlusCircleOutlined />
        </Button>
      </div>
      <div>{props.numberOfThings}</div>
      <div>
        <Button
          type="text"
          size="large"
          onClick={() => props.onClickShowItemMinus()}
          // onClick={() => setNumberOfThings(numberOfThings - 1)}
        >
          <MinusCircleOutlined />
        </Button>
      </div>
    </div>
  );
}
