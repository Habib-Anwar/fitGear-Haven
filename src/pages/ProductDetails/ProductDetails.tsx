import React, { useState } from "react";
import {
  Layout,
  Button,
  Carousel,
  Row,
  Col,
  Typography,
  notification,
} from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

const { Content } = Layout;
const { Title, Text } = Typography;

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  description: string;
  images: string[];
  category: string;
}

interface CartItem {
  productId: number;
  quantity: number;
}

const product: Product = {
  id: 1,
  name: "Example Product",
  price: 99.99,
  stock: 10,
  description: "This is an example product description.",
  images: [
    "https://via.placeholder.com/800x600",
    "https://via.placeholder.com/800x600",
    "https://via.placeholder.com/800x600",
  ],
  category: "Category",
};

const ProductDetails: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = () => {
    const existingCartItem = cart.find((item) => item.productId === product.id);

    if (existingCartItem) {
      if (existingCartItem.quantity < product.stock) {
        setCart(
          cart.map((item) =>
            item.productId === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
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
      setCart([...cart, { productId: product.id, quantity: 1 }]);
      notification.success({
        message: "Added to Cart",
        description: "The product has been added to your cart.",
      });
    }
  };

  const isAddToCartDisabled = cart.some(
    (item) => item.productId === product.id && item.quantity >= product.stock
  );

  return (
    <Layout>
      <Content style={{ padding: "50px" }}>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Carousel autoplay>
              {product.images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={product.name}
                    style={{ width: "100%" }}
                  />
                </div>
              ))}
            </Carousel>
          </Col>
          <Col span={12}>
            <Title level={2}>{product.name}</Title>
            <Text strong style={{ fontSize: "20px" }}>
              ${product.price}
            </Text>
            <div>
              <Text>Stock: {product.stock}</Text>
            </div>
            <div>
              <Text>Category: {product.category}</Text>
            </div>
            <div style={{ margin: "20px 0" }}>
              <Text>{product.description}</Text>
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

export default ProductDetails;
