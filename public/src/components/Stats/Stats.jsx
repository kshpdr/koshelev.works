import { createSignal } from "solid-js";
import { languages } from "../../languages";
import { useContext } from "solid-js";
import { YearDropdown, Title } from "./Stats.styles";
import LanguageContext from "../../context/LanguageContext";
import Modal from "../Modal";

function Stats({ year, onYearChange }) {
  const [selectedBook, setSelectedBook] = createSignal(null);
  const [selectedFilm, setSelectedFilm] = createSignal(null);
  const [showReviewModal, setShowReviewModal] = createSignal(false);

  const { language } = useContext(LanguageContext);

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
        {languages[language()].stats}{" "}
        <YearDropdown value={year} onChange={handleYearChange}>
          <option value="2023">2023</option>
        </YearDropdown>
      </h2>
      <Title>Books</Title>
      <ul>
        {languages[language()].books.map((book) => (
          <li key={book.id}>
            <b>{book.dateFinished}:</b> {book.title}
          </li>
        ))}
      </ul>
      <Title>Films</Title>
      {/* <ul>
        {films.map((film) => (
          <li key={film.id} onClick={() => handleFilmClick(film)}>
            {film.title} ({film.dateFinished})
          </li>
        ))}
      </ul> */}
      <div>Soon... Have to write an API call for that. For now <a href="https://letterboxd.com/koshelev/films/">letterboxd</a> and <a href="https://myanimelist.net/profile/koshelev">MAL</a></div>
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
