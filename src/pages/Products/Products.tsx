import { Avatar, Card, Layout } from "antd";
import Menubar from "./Menubar";
import { useState } from "react";
import { TButton } from "../../components/TButton/TButton";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../../redux/api/baseApi";
export const Products = () => {
  const { Meta } = Card;
  const { Content } = Layout;
  const [filters, setFilters] = useState({
    searchTerm: "",
    selectedCategories: [],
    selectedPriceRange: "",
    sortOrder: "",
  });

  const handleFiltersChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  const { data: products, isLoading, isError } = useGetProductsQuery();
  console.log(products);
  return (
    <>
      <Menubar onFiltersChange={handleFiltersChange}></Menubar>
      <Content style={{ padding: "0 50px", marginTop: 64 }}>
        {/* <ProductList filters={filters} /> */}
      </Content>

      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
      >
        <Meta
          avatar={
            <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
          }
          title="Card title"
          description="This is the description"
        />
        <Link to="/product-details">
          <TButton
            style={{
              padding: "10px 20px",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          ></TButton>
        </Link>
      </Card>
    </>
  );
};
