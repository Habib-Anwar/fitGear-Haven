import { Button, Col, Layout, notification, Row, Typography } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useCart } from "../../pages/Cart/CartContext";

interface TProductProps {
  _id: number;
  images: string;
  name: string;
  price: number;
  stock: number;
  quantity: number;
  description: string;
  category: string;
}

export const TProductDetails: React.FC<TProductProps> = ({
  name,
  price,
  stock,
  description,
  images,
  category,
  _id,
}) => {
  const { Content } = Layout;
  const { Title, Text } = Typography;
  const { addToCart, cart } = useCart();

  const isAddToCartDisabled = cart.some(
    (item) => item.productId === _id && item.quantity >= stock
  );

  const handleAddToCart = () => {
    const product = {
      productId: _id,
      name,
      price,
      stock,
      quantity: 1, // Default quantity to add
    };

    addToCart(product);
    notification.success({
      message: "Added to Cart",
      description: "The product has been added to your cart.",
    });
  };

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
              onClick={handleAddToCart}
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
