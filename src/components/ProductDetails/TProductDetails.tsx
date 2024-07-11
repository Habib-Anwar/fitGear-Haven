import { Button, Col, Layout, notification, Row, Typography } from "antd";
// import { useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useCart } from "../../pages/Cart/CartContext";

interface TProductProps {
  _id: number;
  images: string;
  name: string;
  price: number;
  stock: number;
  description: string;
  category: string;
}

export const TProductDetails: React.FC<TProductProps> = ({
  _id,
  images,
  name,
  price,
  stock,
  description,
  category,
}) => {
  const { Content } = Layout;
  const { Title, Text } = Typography;
  const { cart, dispatch } = useCart();

  const addToCart = () => {
    const existingCartItem = cart.find((item) => item.productId === _id);

    if (existingCartItem) {
      if (existingCartItem.quantity < stock) {
        dispatch({
          type: "ADD_TO_CART",
          payload: { productId: _id, quantity: 1 },
        });
        notification.success({
          message: "Added to Cart",
          description: "The product quantity has been increased in your cart.",
        });
      } else {
        notification.warning({
          message: "Stock Limit Reached",
          description:
            "You have reached the maximum stock quantity for this product.",
        });
      }
    } else {
      dispatch({
        type: "ADD_TO_CART",
        payload: { productId: _id, quantity: 1 },
      });
      notification.success({
        message: "Added to Cart",
        description: "The product has been added to your cart.",
      });
    }
  };

  const isAddToCartDisabled = cart.some(
    (item) => item.productId === _id && item.quantity >= stock
  );

  return (
    <Layout>
      <Content style={{ padding: "50px" }}>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <div>
              <img src={images} alt={name} style={{ width: "100%" }} />
            </div>
          </Col>
          <Col span={12}>
            <Title level={2}>{name}</Title>
            <Text strong style={{ fontSize: "20px" }}>
              ${price}
            </Text>
            <div>
              <Text>Stock: {stock}</Text>
            </div>
            <div>
              <Text>Category: {category}</Text>
            </div>
            <div style={{ margin: "20px 0" }}>
              <Text>{description}</Text>
            </div>
            <Button
              type="primary"
              icon={<ShoppingCartOutlined />}
              onClick={addToCart}
              disabled={isAddToCartDisabled}
            >
              {isAddToCartDisabled ? "Out of Stock" : "Add to Cart"}
            </Button>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};
