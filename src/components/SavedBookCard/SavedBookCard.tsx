import React from "react";
import API from "../../utils/API";
import "./SavedBookCard.scss";

interface BookCardProps {
  id: string;
  title: string;
  authors: string;
  description: string;
  image?: string;
  link: string;
}

export default function BookCard(props: BookCardProps) {
  const deleteBook = (id: string) => {
    API.deleteSavedBookFromDatabase(id).catch((err) => console.log(err));
  };

  return (
    <div className="BookCard">
      {!props.image ? null : <img src={props.image} alt={props.title} />}
      <div className="btnDiv">
        <a href={props.link} target="_blank" rel="noreferrer">
          View
        </a>
        |<button onClick={(event) => deleteBook(props.id)}>Delete</button>
      </div>
      <h2>{props.title}</h2>
      <h4>Written by {props.authors}</h4>
      <p>{props.description}</p>
    </div>
  );
}
