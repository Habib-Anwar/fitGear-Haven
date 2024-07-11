import { Flex, Layout, Spin } from "antd";
import Menubar from "./Menubar";
import { useState } from "react";
import { useGetProductsQuery } from "../../redux/api/baseApi";
import { TCard } from "../../components/Card/TCard";
import { Container } from "../../components/Container/Container";
export const Products = () => {
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

  const { data: products, isLoading, isError } = useGetProductsQuery([]);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Flex gap="small" vertical>
          <Flex gap="small">
            <Spin tip="Loading" size="small"></Spin>
            <Spin tip="Loading"></Spin>
            <Spin tip="Loading" size="large"></Spin>
          </Flex>
        </Flex>
      </div>
    );
  }
  return (
    <>
      <Container>
        <Menubar onFiltersChange={handleFiltersChange}></Menubar>
        <Content style={{ padding: "0 50px", marginTop: 64 }}>
          {/* <ProductList filters={filters} /> */}
        </Content>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
          }}
        >
          {products?.data.map((product) => (
            <TCard key={product.id} {...product} />
          ))}
        </div>
      </Container>
    </>
  );
};
