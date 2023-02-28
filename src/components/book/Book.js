import "./Book.css";
import { NavLink } from "react-router-dom";
const Book = ({title,img,index}) => {
    return (  
        <NavLink to={`/book/` + index}>
            <li className="book">
                <img src={img} width="150" alt={title} height="200" className="book__img"/>
                
                <h3 className="book__title">{title}</h3>   
            </li>
        </NavLink>
    );
}
 
export default Book;