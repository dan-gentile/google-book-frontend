import React, { useState } from "react";
import API from "../../utils/API";
import "./BookCard.scss";

interface BookCardProps {
  title: string;
  authors: string;
  description: string;
  image?: string;
  link: string;
}

export default function BookCard(props: BookCardProps) {
  const [savedState, setSavedState] = useState(false);
  const saveBook = (event: any) => {
    event.preventDefault();
    setSavedState(true);
    API.saveBookToDatabase({
      title: props.title,
      authors: props.authors,
      description: props.description,
      image: props.image,
      link: props.link,
    }).catch((err) => console.log(err));
  };

  return (
    <div className="BookCard">
      {!props.image ? null : <img src={props.image} alt={props.title} />}
      {savedState === false ? null : <div className="alert">Saved!</div>}
      <div className="btnDiv">
        <a href={props.link} target="_blank" rel="noreferrer">
          View
        </a>
        |<button onClick={(event) => saveBook(event)}>Save</button>
      </div>
      <h2>{props.title}</h2>
      <h4>Written by {props.authors}</h4>
      <p>{props.description}</p>
    </div>
  );
}
