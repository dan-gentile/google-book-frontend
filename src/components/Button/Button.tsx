import React from "react";
import "./Button.scss";

interface ButtonProps {
  name: string;
  onClick: (e: React.FormEvent<HTMLButtonElement>) => void;
}

export default function Button(props: ButtonProps) {
  return <button onClick={(e) => props.onClick(e)}>{props.name}</button>;
}
