import React, { useState } from "react";
import BookCard from "../../components/Book Card/BookCard";
import NavBar from "../../components/NavBar/NavBar";
import SearchForm from "../../components/SearchField/SearchForm";
import API from "../../utils/API";
import "./SearchPage.scss";

export default function SearchPage() {
  const [inputSearchState, setInputSearchState] = useState("");
  const [bookApiResponseState, setBookApiResponseState] = useState<Array<any>>(
    []
  );

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
      <div className="BookResults">
        {bookApiResponseState.length === 0 ? (
          <div className="NoBooks">Please search for a book!</div>
        ) : (
          bookApiResponseState.map((response) => {
            return (
              <BookCard
                key={response.id}
                title={
                  !response.volumeInfo.title ? null : response.volumeInfo.title
                }
                authors={
                  !response.volumeInfo.authors
                    ? null
                    : response.volumeInfo.authors[0]
                }
                description={
                  !response.volumeInfo.description
                    ? null
                    : response.volumeInfo.description
                }
                image={
                  !response.volumeInfo.imageLinks
                    ? null
                    : response.volumeInfo.imageLinks.thumbnail
                }
                link={
                  !response.volumeInfo.infoLink
                    ? null
                    : response.volumeInfo.infoLink
                }
              />
            );
          })
        )}
      </div>
    </main>
  );
}
