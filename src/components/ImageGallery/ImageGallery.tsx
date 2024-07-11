import { Container } from "../Container/Container";
import "./ImageGallery.css";

export const ImageGallery = () => {
  return (
    <Container>
      <div className="grid-container">
        <div className="grid-item large">
          <img src="https://i.ibb.co/3zG9P9F/doc1.png" alt="doc1" />
        </div>
        <div className="grid-item medium">
          <img src="https://i.ibb.co/MCTmVh2/doc2.png" alt="doc2" />
        </div>
        <div className="grid-item small">
          <img src="https://i.ibb.co/MCTmVh2/doc2.png" alt="doc2" />
        </div>
        <div className="grid-item small">
          <img src="https://i.ibb.co/MCTmVh2/doc2.png" alt="doc2" />
        </div>
        <div className="grid-item medium">
          <img src="https://i.ibb.co/MCTmVh2/doc2.png" alt="doc2" />
        </div>
        <div className="grid-item small">
          <img src="https://i.ibb.co/MCTmVh2/doc2.png" alt="doc2" />
        </div>
        <div className="grid-item medium">
          <img src="https://i.ibb.co/MCTmVh2/doc2.png" alt="doc2" />
        </div>
        <div className="grid-item large">
          <img src="https://i.ibb.co/3zG9P9F/doc1.png" alt="doc1" />
        </div>
        <div className="grid-item small">
          <img src="https://i.ibb.co/MCTmVh2/doc2.png" alt="doc2" />
        </div>
        <div className="grid-item small">
          <img src="https://i.ibb.co/MCTmVh2/doc2.png" alt="doc2" />
        </div>
      </div>
    </Container>
  );
};
