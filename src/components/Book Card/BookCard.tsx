import React from "react";
import API from "../../utils/API";
import Button from "../Button/Button";
import "./BookCard.scss";

interface BookCardProps {
  title: string;
  authors: string;
  description: string;
  image: string;
  link: string;
}

export default function BookCard(props: BookCardProps) {
  const saveBook = (event: any) => {
    event.preventDefault();
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
      <div className="btnDiv">
        <a href={props.link} target="_blank" rel="noreferrer">
          View
        </a>
        |<Button name="Save" onClick={saveBook} />
      </div>
      <h2>{props.title}</h2>
      <h4>Written by {props.authors}</h4>
      <p>{props.description}</p>
    </div>
  );
}
