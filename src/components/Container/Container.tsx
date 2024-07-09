import { ReactNode } from "react";
import { Row, Col } from "antd";

type TContainerProps = {
  children: ReactNode;
};

export const Container = ({ children }: TContainerProps) => {
  return (
    <Row justify="center">
      <Col
        style={{ marginTop: "80px" }}
        xs={24}
        sm={24}
        md={22}
        lg={20}
        xl={18}
        xxl={16}
        className="h-screen"
      >
        {children}
      </Col>
    </Row>
  );
};
