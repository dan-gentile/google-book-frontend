import axios from "axios";

interface BookData {
  title: string;
  authors: string;
  description: string;
  image: string;
  link: string;
}

export default {
  getBooks: function (query: string) {
    console.log(query);
    return axios.get(`http://localhost:8080/api/google/${query}`);
  },
  getAllSavedBooks: function () {
    return axios.get("https://googlebooksearchbackend.herokuapp.com/api/books");
  },
  saveBookToDatabase: function (bookData: BookData) {
    return axios.post(
      "https://googlebooksearchbackend.herokuapp.com/api/books",
      bookData
    );
  },
  deleteSavedBookFromDatabase: function (id: string) {
    return axios.delete(
      "https://googlebooksearchbackend.herokuapp.com/api/books/" + id
    );
  },
};
