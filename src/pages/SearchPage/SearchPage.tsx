import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import SearchForm from "../../components/SearchField/SearchForm";
import API from "../../utils/API";
import "./SearchPage";

// interface BookAPIResponse {
//   title: string;
//   authors: string;
//   description: string;
//   image: string;
//   link: string;
// }

export default function SearchPage() {
  const [inputSearchState, setInputSearchState] = useState("");
  const [bookApiResponseState, setBookApiResponseState] = useState({});

  const searchGoogleBooks = (query: string) => {
    API.getBooks(query)
      .then((res) => {
        const bookDataArr = res.data.items;
        setBookApiResponseState(bookDataArr);
      })
      .catch((err) => console.error(err));
  };

  const handleInputChange = (event: any) => {
    setInputSearchState(event.target.value);
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    searchGoogleBooks(inputSearchState);
  };

  return (
    <main className="SearchPage">
      <NavBar />
      <SearchForm
        value={inputSearchState}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        placeholder="Search Books"
      />
    </main>
  );
}
