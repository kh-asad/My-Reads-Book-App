const Book=({book,update})=>{

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" 
                style={{width: 128, height: 193,backgroundImage: `url(${book.imageLinks?.thumbnail})`
                }}>
                    
                </div>
                <div className="book-shelf-changer">
                    <select onChange={(event)=>{update(book,event.target.value)}} defaultValue={book.shelf ?   book.shelf : "none"}>
                        <option value="none" disabled >Move to</option>
                        <option value="currentlyReading" >Currently Reading</option>
                        <option value="wantToRead" >Want To Read</option>
                        <option value="read" >Read</option>
                        <option value="none" >None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-author">{book.authors}</div>
        </div>
    )
};

export default Book;