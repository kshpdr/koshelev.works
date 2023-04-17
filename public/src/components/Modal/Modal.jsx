import { createEffect, createSignal } from "solid-js";
import { Container, ClosedIcon, Layout } from "./Modal.styles";

function Modal({ item, onClose, itemType }) {
  const [review, setReview] = createSignal("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Review for ${itemType} ${item.id}: ${review()}`);
    onClose();
  };

  createEffect(() => {
    if (item) {
      setReview(item.review || "");
    }
  });

  return (
    <Layout>
      <Container>
        <ClosedIcon onClick={onClose} />
        <h3>
          Write a review for {itemType}: {item.title}
        </h3>
        <form onSubmit={handleSubmit}>
          <textarea
            value={review()}
            onInput={(e) => setReview(e.target.value)}
            style={{ width: "100%", height: "200px" }}
          ></textarea>
          <br />
          <button type="submit">Submit</button>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </form>
      </Container>
    </Layout>
  );
}

export default Modal;
