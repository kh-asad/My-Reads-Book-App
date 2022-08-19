import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI"
import Book from "./Book";
import {PropTypes} from "prop-types";

const SearchPage=({update})=>{

    const [query,setQuery]=useState("");
    const [searched,setSearched]=useState([]);

    
  useEffect(()=>{

    let unmount=false;
    const getSearch=async()=>{
    if(query){
      const res= await BooksAPI.search(query);
      if(!unmount){
      if(Array.isArray(res)){
        setSearched(res);
      }else{
        setSearched([]);
      }
      }
    }
  }
  getSearch();
    return ()=>{
      unmount=true;
      setSearched([]);
    }
  },[query]);

    return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">Close</Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                value={query}
                onChange={(event)=>{setQuery(event.target.value)}}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
                {
                    searched?.map((book)=>(
                    <li key={book.id}><Book book={book} update={update}></Book></li>
                    )) 
                }
            </ol>
          </div>
        </div>
    );
}

SearchPage.propTypes={
  update:PropTypes.func.isRequired
};

export default SearchPage;