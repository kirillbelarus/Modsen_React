import "./../styles/main.css";
import Book from "../components/book/Book";
import { books } from "../helpers/bookList";
const Books = () => {
    return ( 
        <>
        <main className="section">
            <h4 className="title-1">Found 6 results</h4>
            <ul className="books">
                {books.map((book,index)=>{
                    return (
                        <Book 
                            key={index} 
                            title ={book.title}
                            img={book.img}
                            index = {index}
                        />
                    )   
                })}
                {/* <Book/> */}
            </ul>
        </main>
        </>
    );
}
 
export default Books;