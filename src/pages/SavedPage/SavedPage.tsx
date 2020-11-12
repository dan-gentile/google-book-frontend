import React, { useEffect, useState } from "react";
import SavedBookCard from "../../components/SavedBookCard/SavedBookCard";
import NavBar from "../../components/NavBar/NavBar";
import API from "../../utils/API";
import "./SavedPage.scss";

export default function SavedPage() {
  const [books, setBooks] = useState<Array<any>>([]);
  useEffect(() => {
    loadBooks();
  }, [books]);

  const loadBooks = () => {
    API.getAllSavedBooks()
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <main className="SavedPage">
      <NavBar />
      <div className="SavedBooksTitle">
        <h3>Saved Books</h3>
      </div>
      <div className="BookResults">
        {books.length === 0 ? (
          <div className="NoBooks">No Saved Books!</div>
        ) : (
          books.map((book) => {
            return (
              <SavedBookCard
                key={book._id}
                id={book._id}
                title={book.title}
                authors={book.authors}
                description={book.description}
                image={book.image}
                link={book.link}
              />
            );
          })
        )}
      </div>
    </main>
  );
}
