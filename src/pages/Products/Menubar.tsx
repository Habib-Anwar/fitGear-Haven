import React, { useState } from "react";
import { Layout, Input, Select, Button, Checkbox, Row, Col } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Header } = Layout;
const { Option } = Select;

const categories = ["Cardio", "Strength", "Flexibility", "Balance"];
const priceRanges = ["0-50", "50-100", "100-200", "200+"];

interface MenubarProps {
  onFiltersChange: (filters: any) => void;
}

const Menubar: React.FC<MenubarProps> = ({ onFiltersChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    handleFiltersChange();
  };

  const handleCategoryChange = (checkedValues: any) => {
    setSelectedCategories(checkedValues);
    handleFiltersChange();
  };

  const handlePriceRangeChange = (value: string) => {
    setSelectedPriceRange(value);
    handleFiltersChange();
  };

  const handleSortOrderChange = (value: string) => {
    setSortOrder(value);
    handleFiltersChange();
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategories([]);
    setSelectedPriceRange("");
    setSortOrder("");
    handleFiltersChange();
  };

  const handleFiltersChange = () => {
    onFiltersChange({
      searchTerm,
      selectedCategories,
      selectedPriceRange,
      sortOrder,
    });
  };

  return (
    <Header
      style={{
        backgroundColor: "#f0f2f5",
        padding: "10px",
        borderRadius: "15px",
      }}
    >
      <Row gutter={16} align="middle">
        <Col>
          <Input
            placeholder="Search for products"
            prefix={<SearchOutlined />}
            value={searchTerm}
            onChange={handleSearch}
          />
        </Col>
        <Col>
          <Checkbox.Group
            options={categories}
            value={selectedCategories}
            onChange={handleCategoryChange}
          />
        </Col>
        <Col>
          <Select
            placeholder="Select price range"
            style={{ width: 200 }}
            value={selectedPriceRange}
            onChange={handlePriceRangeChange}
          >
            {priceRanges.map((range) => (
              <Option key={range} value={range}>
                {range}
              </Option>
            ))}
          </Select>
        </Col>
        <Col>
          <Select
            placeholder="Sort by price"
            style={{ width: 200 }}
            value={sortOrder}
            onChange={handleSortOrderChange}
          >
            <Option value="asc">Price: Low to High</Option>
            <Option value="desc">Price: High to Low</Option>
          </Select>
        </Col>
        <Col>
          <Button onClick={clearFilters}>Clear Filters</Button>
        </Col>
      </Row>
    </Header>
  );
};

export default Menubar;
