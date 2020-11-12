import React from "react";
import "./SearchForm.scss";

interface SearchFormProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFormSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
  value: string;
  placeholder: string;
}

function SearchForm(props: SearchFormProps) {
  return (
    <form className="SearchForm">
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder={props.placeholder}
          id="search"
        />
      </div>
      <button onClick={props.handleFormSubmit} className="btn">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
