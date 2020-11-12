import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import API from "../../utils/API";
import "./SavedPage.scss";

export default function SavedPage() {
  const [books, setBooks] = useState<Array<any>>([]);
  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = () => {
    API.getAllSavedBooks()
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  };

  const deleteBook = (id: string) => {
    API.deleteSavedBookFromDatabase(id)
      .then((res) => loadBooks())
      .catch((err) => console.log(err));
  };

  return (
    <main className="SavedPage">
      <NavBar />
    </main>
  );
}
