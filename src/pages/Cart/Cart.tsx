import {
  Layout,
  List,
  Button,
  Row,
  Col,
  Typography,
  Modal,
  notification,
} from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useCart } from "./CartContext";

export const Cart = () => {
  const { cart } = useCart();
  const { Content } = Layout;
  const { Title, Text } = Typography;

  interface CartItem {
    productId: number;
    name: string;
    price: number;
    stock: number;
    quantity: number;
  }

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
    console.log(cart);
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
            <List.Item>
              <List.Item.Meta
                title={<Text>{item.name}</Text>}
                description={`Quantity: ${item.quantity}`}
              />
              <Text strong>${item.price * item.quantity}</Text>
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
