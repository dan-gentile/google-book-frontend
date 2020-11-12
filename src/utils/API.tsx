import axios from "axios";

interface BookData {
  title: string;
  authors: string;
  description: string;
  image?: string;
  link: string;
}

export default {
  getBooks: function (query: string) {
    return axios.get(`http://localhost:8080/api/google/${query}`);
  },
  getAllSavedBooks: function () {
    return axios.get("http://localhost:8080/api/books");
  },
  saveBookToDatabase: function (bookData: BookData) {
    return axios.post("http://localhost:8080/api/books", bookData);
  },
  deleteSavedBookFromDatabase: function (id: string) {
    return axios.delete(`http://localhost:8080/api/books/${id}`);
  },
};
