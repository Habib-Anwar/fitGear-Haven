import { Card, Col, Row } from "antd";
import { Container } from "../Container/Container";
import "./Categories.css";

export const Categories = () => {
  const { Meta } = Card;
  return (
    <Container>
      <Row gutter={[48, 48]} justify="center">
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            style={{ width: "100%", height: "300px" }}
            cover={
              <div className="card-image-container">
                <img
                  className="card-image"
                  alt="example"
                  src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-720w,f_auto,q_auto:best/rockcms/2024-01/AMAZON-b8d48f.jpg"
                />
              </div>
            }
          >
            <Meta title="TREADMILLS" />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            style={{ width: "100%", height: "300px" }}
            cover={
              <div className="card-image-container">
                <img
                  className="card-image"
                  style={{ height: "220px" }}
                  alt="example"
                  src="https://res.cloudinary.com/iconfitness/image/upload/f_auto,q_auto,fl_progressive,fl_lossy,dpr_auto,w_auto/v1/site--6/PFEL55921-44494.png"
                />
              </div>
            }
          >
            <Meta title="ELLIPTICALS" />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            style={{ width: "100%", height: "300px" }}
            cover={
              <div className="card-image-container">
                <img
                  className="card-image"
                  style={{ height: "220px" }}
                  alt="example"
                  src="https://www.gymmarine.com/wp-content/uploads/2019/01/LifeFitness-Optima-Dual-Adjustable-Pulley-1-667x400.jpg"
                />
              </div>
            }
          >
            <Meta title="CABLE MACHINES" />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            style={{ width: "100%", height: "300px" }}
            cover={
              <div className="card-image-container">
                <img
                  className="card-image"
                  style={{ height: "220px" }}
                  alt="example"
                  src="https://www.gymstick.com/media/catalog/product/cache/0618255a1bb123b22a1271e4745709b5/6/1/61244.jpg"
                />
              </div>
            }
          >
            <Meta title="STRENGTH" />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
