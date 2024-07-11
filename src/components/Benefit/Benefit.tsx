import React from "react";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { Avatar, List, Space } from "antd";
import { Container } from "../Container/Container";

export const Benefit = () => {
  const data = [
    {
      title: "Enhanced Understanding",
      avatar: `https://i.ibb.co/8g4L7tc/wImg3.jpg`,
      description: "Detailed images that highlight key features.",
      content:
        "Our products come with detailed images that highlight key features, making it easier for you to understand what you're getting.",
      image: "https://i.ibb.co/tb9w7F7/ben1.jpg",
    },
    {
      title: "Improved Engagement",
      avatar: `https://i.ibb.co/zQp0fL5/man1.jpg`,
      description: "Interactive images and infographics.",
      content:
        "Engage with our products like never before. Our interactive images and infographics create a more immersive experience, helping you explore every aspect of the product in an engaging way.",
      image: "https://i.ibb.co/yppgvPW/ben2.jpg",
    },
    {
      title: "Boosted Conversion Rates",
      avatar: `https://i.ibb.co/KqnY1C5/female2.jpg`,
      description: "Visual proof of real-world benefits.",
      content:
        "See the real-world benefits of our products through before-and-after images and customer testimonials. Our visuals provide the proof you need to make confident purchasing decisions.",
      image: "https://i.ibb.co/swJsbgZ/ben3.jpg",
    },
  ];

  const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  return (
    <Container>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[
              <IconText
                icon={StarOutlined}
                text="156"
                key="list-vertical-star-o"
              />,
              <IconText
                icon={LikeOutlined}
                text="156"
                key="list-vertical-like-o"
              />,
              <IconText
                icon={MessageOutlined}
                text="2"
                key="list-vertical-message"
              />,
            ]}
            extra={<img width={272} alt="benefit" src={item.image} />}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a>{item.title}</a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
    </Container>
  );
};
