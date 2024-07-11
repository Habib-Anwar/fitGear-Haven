import { Spin } from "antd";
import { TProductDetails } from "../../components/ProductDetails/TProductDetails";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../redux/api/baseApi";

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, error, isLoading } = useGetProductByIdQuery(id);

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
        <Spin tip="Loading" size="large" />
      </div>
    );
  }

  if (error) {
    return <div>Error loading product details.</div>;
  }

  return (
    <div>{product && <TProductDetails key={product._id} {...product} />}</div>
  );
};

export default ProductDetails;
