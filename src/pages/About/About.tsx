import { Layout, Row, Col, Typography, Avatar, Card } from "antd";
import {
  TeamOutlined,
  MessageOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";

export const About = () => {
  const { Content } = Layout;
  const { Title, Text, Paragraph } = Typography;

  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO",
      bio: "John has over 20 years of experience in the industry and is the visionary behind our company.",
      avatar: "https://via.placeholder.com/150",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      bio: "Jane is a tech genius, leading our tech team with innovative solutions.",
      avatar: "https://via.placeholder.com/150",
    },
    // Add more team members as needed
  ];

  const testimonials = [
    {
      name: "Alice Johnson",
      text: "This company has changed my life! Their products are amazing and the customer service is top-notch.",
    },
    {
      name: "Bob Brown",
      text: "Highly recommend! Great quality and excellent support.",
    },
    // Add more testimonials as needed
  ];
  return (
    <Layout>
      <Content
        style={{
          padding: "50px",
          background: "linear-gradient(to right, #364d7980, #333)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <Title
            level={1}
            style={{
              color: "white",
              fontWeight: "bold",
              animation: "fadeIn 2s",
            }}
          >
            About Us
          </Title>
          <Paragraph style={{ color: "white", animation: "fadeIn 2s" }}>
            Welcome to our company! We are dedicated to providing the best
            products and services to our customers.
          </Paragraph>
        </div>

        <div style={{ marginBottom: "50px", animation: "fadeIn 2s" }}>
          <Title level={2}>Company Overview</Title>
          <Paragraph>
            Our company was founded in [Year] with a mission to [Company
            Mission]. Over the years, we have grown into a [Industry] leader,
            committed to [Vision Statement].
          </Paragraph>
        </div>

        <div style={{ marginBottom: "50px", animation: "fadeIn 2s" }}>
          <Title level={2}>Our Team</Title>
          <Row gutter={16}>
            {teamMembers.map((member, index) => (
              <Col key={index} xs={24} sm={12} md={8} lg={6}>
                <Card
                  hoverable
                  style={{
                    textAlign: "center",
                    marginBottom: "20px",
                    animation: "fadeInUp 2s",
                  }}
                >
                  <Avatar src={member.avatar} size={100} />
                  <Title level={4} style={{ marginTop: "10px" }}>
                    {member.name}
                  </Title>
                  <Text type="secondary">{member.role}</Text>
                  <Paragraph style={{ marginTop: "10px" }}>
                    {member.bio}
                  </Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        <div style={{ marginBottom: "50px", animation: "fadeIn 2s" }}>
          <Title level={2}>Customer Testimonials</Title>
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              hoverable
              style={{ marginBottom: "20px", animation: "fadeInUp 2s" }}
            >
              <Paragraph>
                <MessageOutlined /> {testimonial.text}
              </Paragraph>
              <Text type="secondary">- {testimonial.name}</Text>
            </Card>
          ))}
        </div>

        <div style={{ animation: "fadeIn 2s" }}>
          <Title level={2}>Contact Us</Title>
          <Row>
            <Col span={12}>
              <Paragraph>
                <PhoneOutlined /> Phone: (123) 456-7890
              </Paragraph>
              <Paragraph>
                <MailOutlined /> Email: contact@company.com
              </Paragraph>
            </Col>
            <Col span={12}>
              <Paragraph>
                <TeamOutlined /> Address: 123 Main St, Anytown, USA
              </Paragraph>
              <Paragraph>
                We would love to hear from you! Please reach out with any
                questions or feedback.
              </Paragraph>
            </Col>
          </Row>
        </div>
      </Content>
      <style>
        {`
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}
      </style>
    </Layout>
  );
};
