import React from "react";
import { Avatar, Card } from "antd";
import { Link } from "react-router-dom";
import { TButton } from "../TButton/TButton";

interface TCardProps {
  _id: number;
  images: string;
  name: string;
  price: number;
}

export const TCard: React.FC<TCardProps> = ({ images, name, price, _id }) => {
  const { Meta } = Card;

  return (
    <Card style={{ width: 300 }} cover={<img alt={name} src={images} />}>
      <Meta
        avatar={
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }
        title={name}
        description={`$${price}`}
      />
      <Link to={`/product-details/${_id}`}>
        <TButton
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          View Details
        </TButton>
      </Link>
    </Card>
  );
};
