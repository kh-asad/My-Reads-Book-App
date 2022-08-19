import Shelf from "./Shelf";
import Header from "./header";
import { Link } from "react-router-dom";
import {PropTypes}  from "prop-types";

const BookShelf=({books,update})=>{

    const currentlyReading=books.filter((book)=>book.shelf==="currentlyReading");
    const read=books.filter((book)=>book.shelf==="read");
    const wantToRead=books.filter((book)=>book.shelf==="wantToRead");

    return (
        <div className="app">
            <Header></Header>
        <div className="list-books-content">
        <div>
            <Shelf title="Currently Reading" books={currentlyReading} update={update}></Shelf>
            <Shelf title="Want To Read" books={wantToRead} update={update}></Shelf>
            <Shelf title="Read" books={read} update={update}></Shelf>
        </div>
        </div>
        <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
    )
};

BookShelf.propTypes={
    books:PropTypes.array.isRequired,
    update:PropTypes.func.isRequired
};

export default BookShelf;