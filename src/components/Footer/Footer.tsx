import { Layout, Row, Col } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

import "./Footer.css";

export const Footer = () => {
  const { Footer } = Layout;
  return (
    <Footer
      className="shining-black"
      style={{
        color: "white",
        padding: "20px 50px",
      }}
    >
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8}>
          <h3>Contact Us</h3>
          <p>Email: contact@yourcompany.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Your Street, City, Country</p>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <h3>Follow Us</h3>
          <div>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookOutlined
                style={{
                  fontSize: "24px",
                  color: "white",
                  marginRight: "16px",
                }}
              />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterOutlined
                style={{
                  fontSize: "24px",
                  color: "white",
                  marginRight: "16px",
                }}
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramOutlined
                style={{
                  fontSize: "24px",
                  color: "white",
                  marginRight: "16px",
                }}
              />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinOutlined
                style={{
                  fontSize: "24px",
                  color: "white",
                  marginRight: "16px",
                }}
              />
            </a>
          </div>
        </Col>
        <Col xs={24} sm={24} md={8}>
          <h3>Quick Links</h3>
          <p>
            <a href="/about" style={{ color: "white" }}>
              About Us
            </a>
          </p>
          <p>
            <a href="/services" style={{ color: "white" }}>
              Services
            </a>
          </p>
          <p>
            <a href="/contact" style={{ color: "white" }}>
              Contact
            </a>
          </p>
          <p>
            <a href="/privacy" style={{ color: "white" }}>
              Privacy Policy
            </a>
          </p>
        </Col>
      </Row>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        ©2024 FitGear Haven. All Rights Reserved.
      </div>
    </Footer>
  );
};
