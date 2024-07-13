import { Container } from "../Container/Container";
import "./ImageGallery.css";

export const ImageGallery = () => {
  return (
    <Container>
      <div className="grid-container">
        <div className="grid-item large">
          <img
            src="https://cdn.shopify.com/s/files/1/0508/1114/2315/t/3/assets/ccbda23b9aa0--2023-12-21-Ripper-Launch-1393-31998e.jpg?v=1706806510"
            alt="doc1"
          />
        </div>
        <div className="grid-item medium">
          <img
            src="https://cdn.bdstall.com/product-image/giant_138517.jpg"
            alt="doc2"
          />
        </div>
        <div className="grid-item small">
          <img src="https://i.ibb.co/swPgpv5/download-5.jpg" alt="doc2" />
        </div>
        <div className="grid-item small">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvaehKVZ0upQo6Sp6TDNecX-QsVXLbD8B5Tw&s"
            alt="doc2"
          />
        </div>
        <div className="grid-item medium">
          <img
            src="https://www.mckinsey.com/~/media/mckinsey/industries/consumer%20packaged%20goods/our%20insights/sweating%20for%20the%20fitness%20consumer/sweating-1536x1536.jpg"
            alt="doc2"
          />
        </div>
        <div className="grid-item small">
          <img src="https://i.ibb.co/rmyLB0c/images-1.jpg" alt="doc2" />
        </div>
        <div className="grid-item medium">
          <img src="https://i.ibb.co/WPJDKRw/download-3.jpg" alt="doc2" />
        </div>
        <div className="grid-item large">
          <img
            src="https://commercial.torquefitness.com/cdn/shop/files/Detroit_Sweat_4472x.jpg?v=1655150248"
            alt="doc1"
          />
        </div>
        <div className="grid-item small">
          <img src="https://i.ibb.co/WkYfHSx/download-4.jpg" alt="doc2" />
        </div>
        <div className="grid-item small">
          <img src="https://i.ibb.co/6HS503j/imagest.jpg" alt="doc2" />
        </div>
      </div>
    </Container>
  );
};
