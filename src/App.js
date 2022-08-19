import "./App.css";
import { useState,useEffect } from "react";
import * as BooksAPI from "./BooksAPI"
import BookShelf from "./BookShelf";
import SearchPage from "./SearchPage"
import {Routes,Route, BrowserRouter} from "react-router-dom";


function App() {

  const [books,setBooks]=useState([]);

  useEffect(()=>{
    const getBooks=async()=>{
      const res=await BooksAPI.getAll();
      setBooks(res);
    }
    getBooks();  
  },[]);

  const updateBookShelf=async(book,newShelf)=>{
    const bookUpdated=books.map(b=>{
      if(book.id===b.id){
        b.shelf=newShelf;
      }
      return b;
    });
    const bookToUpdate = books.filter(it => it.id === book.id);
    setBooks(bookUpdated);
    await BooksAPI.update(bookToUpdate[0],newShelf);
  }

  const addSearchBook = async (book, newShelf) => {
    book.shelf = newShelf
    await BooksAPI.update(book,newShelf);

    const updateBooks = [...books];
    updateBooks.push(book);
    setBooks(updateBooks);
  }
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="search" element={
        <SearchPage update={addSearchBook}></SearchPage>
      } />
      <Route exact path="/" element={
     <BookShelf books={books} update={updateBookShelf}/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;