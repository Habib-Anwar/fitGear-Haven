import React, { useState } from "react";
import {
  Layout,
  Form,
  Input,
  Button,
  Radio,
  notification,
  Typography,
} from "antd";

import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe("your-stripe-public-key");

const { Content } = Layout;
const { Title } = Typography;

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
  name: string;
  price: number;
  stock: number;
  quantity: number;
}

const CheckoutPage: React.FC = () => {
  const [form] = Form.useForm();
  const [paymentMethod, setPaymentMethod] = useState<string>("cod");
  const stripe = useStripe();
  const elements = useElements();

  const cart: CartItem[] = [
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

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = async () => {
    const userDetails = await form.validateFields();
    if (paymentMethod === "cod") {
      // Handle Cash on Delivery
      notification.success({
        message: "Order Placed",
        description: "Your order has been placed successfully!",
      });
      history.push("/success");
    } else if (paymentMethod === "stripe") {
      // Handle Stripe Payment
      if (!stripe || !elements) {
        return;
      }
      const cardElement = elements.getElement(CardElement);
      const { error, paymentMethod: stripePaymentMethod } =
        await stripe.createPaymentMethod({
          type: "card",
          card: cardElement!,
        });
      if (error) {
        notification.error({
          message: "Payment Failed",
          description: error.message,
        });
      } else {
        notification.success({
          message: "Order Placed",
          description:
            "Your payment was successful and your order has been placed!",
        });
        history.push("/success");
      }
    }
  };

  return (
    <Layout>
      <Content style={{ padding: "50px" }}>
        <Title level={2}>Checkout</Title>
        <Form
          form={form}
          layout="vertical"
          initialValues={{ paymentMethod: "cod" }}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              { required: true, message: "Please enter your phone number" },
            ]}
          >
            <Input placeholder="Phone Number" />
          </Form.Item>
          <Form.Item
            name="address"
            label="Delivery Address"
            rules={[
              { required: true, message: "Please enter your delivery address" },
            ]}
          >
            <Input.TextArea placeholder="Delivery Address" />
          </Form.Item>
          <Form.Item name="paymentMethod" label="Payment Method">
            <Radio.Group
              onChange={(e) => setPaymentMethod(e.target.value)}
              value={paymentMethod}
            >
              <Radio value="cod">Cash on Delivery</Radio>
              <Radio value="stripe">Stripe</Radio>
            </Radio.Group>
          </Form.Item>
          {paymentMethod === "stripe" && (
            <Form.Item label="Card Details">
              <CardElement />
            </Form.Item>
          )}
          <Form.Item>
            <Button type="primary" onClick={handlePlaceOrder}>
              Place Order
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
};

const WrappedCheckoutPage = () => (
  <Elements stripe={stripePromise}>
    <CheckoutPage />
  </Elements>
);

export default WrappedCheckoutPage;
