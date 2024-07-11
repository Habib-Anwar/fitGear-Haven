import { useState } from "react";
import {
  Layout,
  List,
  Button,
  InputNumber,
  Row,
  Col,
  Typography,
  Modal,
  notification,
} from "antd";
import { ShoppingCartOutlined, DeleteOutlined } from "@ant-design/icons";

export const Cart = () => {
  const { Content } = Layout;
  const { Title } = Typography;

  interface CartItem {
    productId: number;
    name: string;
    price: number;
    stock: number;
    quantity: number;
  }

  const initialCart: CartItem[] = [
    {
      productId: 1,
      name: "Example Product 1",
      price: 99.99,
      stock: 10,
      quantity: 1,
    },
    {
      productId: 2,
      name: "Example Product 2",
      price: 149.99,
      stock: 5,
      quantity: 2,
    },
  ];
  const [cart, setCart] = useState<CartItem[]>(initialCart);

  const updateQuantity = (productId: number, quantity: number) => {
    setCart(
      cart.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (productId: number) => {
    Modal.confirm({
      title: "Are you sure you want to remove this product from the cart?",
      onOk: () => {
        setCart(cart.filter((item) => item.productId !== productId));
        notification.success({
          message: "Removed from Cart",
          description: "The product has been removed from your cart.",
        });
      },
    });
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const isCheckoutDisabled = cart.some((item) => item.stock === 0);
  return (
    <Layout>
      <Content style={{ padding: "50px" }}>
        <Title level={2}>Shopping Cart</Title>
        <List
          itemLayout="horizontal"
          dataSource={cart}
          renderItem={(item) => (
            <List.Item
              actions={[
                <InputNumber
                  min={1}
                  max={item.stock}
                  value={item.quantity}
                  onChange={(value) =>
                    updateQuantity(item.productId, value as number)
                  }
                />,
                <Button
                  type="link"
                  icon={<DeleteOutlined />}
                  onClick={() => removeItem(item.productId)}
                />,
              ]}
            >
              <List.Item.Meta
                title={item.name}
                description={`Price: $${item.price} | Stock: ${item.stock}`}
              />
              <div>Subtotal: ${(item.price * item.quantity).toFixed(2)}</div>
            </List.Item>
          )}
        />
        <Row justify="end" style={{ marginTop: "20px" }}>
          <Col>
            <Title level={4}>Total: ${getTotalPrice().toFixed(2)}</Title>
            <Button
              type="primary"
              icon={<ShoppingCartOutlined />}
              disabled={isCheckoutDisabled}
              onClick={() =>
                notification.success({ message: "Proceeding to checkout..." })
              }
            >
              {isCheckoutDisabled ? "Out of Stock" : "Proceed to Checkout"}
            </Button>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};
