import { useState } from "react";
import {
  Layout,
  Table,
  Button,
  Modal,
  Form,
  Input,
  InputNumber,
  Select,
  notification,
  Popconfirm,
  Upload,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useAddProductMutation } from "../../redux/api/baseApi";

const { Content } = Layout;
const { Option } = Select;

interface Product {
  id?: number;
  name: string;
  price: number;
  category: string;
  description: string;
  images: string;
  stock: number;
}

export const ProductManagement = () => {
  const [addProduct, { isLoading, isError, isSuccess }] =
    useAddProductMutation();
  const [products, setProducts] = useState<Product[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const [form] = Form.useForm();

  const showModal = (product: Product | null) => {
    setEditingProduct(product);
    setIsModalVisible(true);
    if (product) {
      form.setFieldsValue(product);
    } else {
      form.resetFields();
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setEditingProduct(null);
  };

  const handleSave = async (values: any) => {
    if (editingProduct) {
      setProducts(
        products.map((product) =>
          product.id === editingProduct.id
            ? { ...editingProduct, ...values }
            : product
        )
      );
      notification.success({
        message: "Product Updated",
        description: "The product has been updated successfully.",
      });
    } else {
      const newProduct = {
        ...values,
        id: products.length + 1,
      };
      setProducts([...products, newProduct]);
      notification.success({
        message: "Product Added",
        description: "The product has been added successfully.",
      });

      try {
        await addProduct(newProduct).unwrap();
        notification.success({
          message: "Product Added to product page",
          description:
            "The product has been added to the product page successfully.",
        });
      } catch (error) {
        notification.error({
          message: "Product Add Failed",
          description: "Failed to add product to the product page.",
        });
      }
    }
    setIsModalVisible(false);
    setEditingProduct(null);
  };

  const handleDelete = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
    notification.success({
      message: "Product Deleted",
      description: "The product has been deleted successfully.",
    });
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: Product) => (
        <>
          <Button onClick={() => showModal(record)}>Edit</Button>
          <Popconfirm
            title="Are you sure to delete this product?"
            onConfirm={() => handleDelete(record.id!)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  const uploadProps = {
    beforeUpload: (file: any) => {
      const formData = new FormData();
      formData.append("image", file);
      const url = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMGBB_KEY
      }`;
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          form.setFieldsValue({
            images: data.data.url,
          });
        });
      return false;
    },
  };

  return (
    <Layout>
      <Content style={{ padding: "50px" }}>
        <Button
          type="primary"
          onClick={() => showModal(null)}
          style={{ marginBottom: "20px" }}
        >
          Add New Product
        </Button>
        <Table columns={columns} dataSource={products} rowKey="id" />
        <Modal
          title={editingProduct ? "Edit Product" : "Add Product"}
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
        >
          <Form form={form} layout="vertical" onFinish={handleSave}>
            <Form.Item
              name="name"
              label="Name"
              rules={[
                { required: true, message: "Please enter the product name" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="price"
              label="Price"
              rules={[
                { required: true, message: "Please enter the product price" },
              ]}
            >
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item
              name="category"
              label="Category"
              rules={[{ required: true, message: "Please select a category" }]}
            >
              <Select>
                <Option value="TREADMILLS">TREADMILLS</Option>
                <Option value="ELLIPTICALS">ELLIPTICALS</Option>
                <Option value="CABLE MACHINES">CABLE MACHINES</Option>
                <Option value="STRENGTH">STRENGTH</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="stock"
              label="Stock"
              rules={[
                { required: true, message: "Please enter the stock quantity" },
              ]}
            >
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item name="description" label="Description">
              <Input.TextArea />
            </Form.Item>
            <Form.Item name="images" label="Images">
              <Upload {...uploadProps} listType="picture-card">
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                {editingProduct ? "Update" : "Add"}
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </Content>
    </Layout>
  );
};
