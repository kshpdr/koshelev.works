import { createSignal } from "solid-js";
import { YearDropdown } from "./Stats.styles";
import Modal from "../Modal";

function Stats({ year, onYearChange }) {
  const [selectedBook, setSelectedBook] = createSignal(null);
  const [selectedFilm, setSelectedFilm] = createSignal(null);
  const [showReviewModal, setShowReviewModal] = createSignal(false);

  const books = [
    { id: 1, title: "1948 - George Orwell", dateFinished: "26.01.2023" },
    { id: 2, title: "Brave New World - Aldous Huxley", dateFinished: "23.02.2023" },
    { id: 3, title: "Kafka on the Shore - Haruki Murakami", dateFinished: "21.03.2023" },
    { id: 4, title: "Unfaithfulness - Marina Trawkova", dateFinished: "26.03.2023" },
    { id: 5, title: "Great Expectations - Charles Dickens (Dropped)", dateFinished: "17.04.2023" },
  ];

  const films = [
    // { id: 1, title: "Film 1", dateFinished: "2023-02-01" },
    // { id: 2, title: "Film 2", dateFinished: "2023-02-15" },
  ];

  const handleBookClick = (book) => {
    setSelectedBook(book);
    setShowReviewModal(true);
  };

  const handleFilmClick = (film) => {
    setSelectedFilm(film);
    setShowReviewModal(true);
  };

  const closeModal = () => {
    setSelectedBook(null);
    setSelectedFilm(null);
    setShowReviewModal(false);
  };

  const handleYearChange = (e) => {
    onYearChange(parseInt(e.target.value));
  };

  return (
    <>
      <h2>
        Stats for{" "}
        <YearDropdown value={year} onChange={handleYearChange}>
          <option value="2023">2023</option>
        </YearDropdown>
      </h2>
      <h3>Books</h3>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <b>{book.dateFinished}:</b> {book.title}
          </li>
        ))}
      </ul>
      <h3>Films</h3>
      {/* <ul>
        {films.map((film) => (
          <li key={film.id} onClick={() => handleFilmClick(film)}>
            {film.title} ({film.dateFinished})
          </li>
        ))}
      </ul> */}
      <div>Soon... Have to write an API call for that. For now <a href="https://letterboxd.com/koshelev/films/">letterboxd</a></div>
      {showReviewModal() && (
        <Modal
          item={selectedBook() || selectedFilm()}
          onClose={closeModal}
          itemType={selectedBook() ? "Book" : "Film"}
        />
      )}
    </>
  );
}

export default Stats;
