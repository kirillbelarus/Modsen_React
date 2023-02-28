
import "./../styles/second.css";
import pic1 from "./../img/1.jpg";
import {books} from "./../helpers/bookList";
import { useParams } from "react-router-dom";
const Book = () => {
    const   {id} = useParams();
    const book = books[id];
    return ( 
        <>
            <main className="">
                <div className="book-details">
                    <div className="book__img2">
                        <img src={book.img} alt="" width="300" height="400" className="book-details__cover"/>
                    </div>
                    <div className="book-details__desc">
                        <h3 className="title-1">{book.title}</h3>
                        <p className="title-3">{book.desc}</p>
                    </div>
                </div>
            </main>
        </>
    );
}
 
export default Book;