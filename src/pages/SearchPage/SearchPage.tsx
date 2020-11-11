import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import SearchForm from "../../components/SearchField/SearchForm";
// import API from "../../utils/API";
import "./SearchPage";

// interface BookAPIResponse{

// }

export default function SearchPage() {
  // const searchGoogleBooks = (query: string)=>{
  //   API.getBooks(query)
  //   .then(res)
  // }

  const [inputSearchState, setInputSearchState] = useState("");

  const handleInputChange = (event: any) => {
    setInputSearchState(event.target.value);
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
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
