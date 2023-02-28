import "./../../components/header/style.css";
const Header = () => {
    return ( 
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Search for books</strong>
                </h1>
                <div className="header__search">
                    <form>
                        <input type="text" placeholder="Искать здесь..."/>
                        <button type="submit"></button>
                    </form>
                </div>
            </div>
            <div className="header__sort">
                <div className="category__sort">
                    <h4>Categories</h4>
                        <select id="category-select">
                            <option value="">all</option>
                            <option value="computers">computers</option>
                            <option value="telephone">telephone</option>
                        </select>
                    
                </div>
                <div className="value__sorting">
                    <h4>Sorting by</h4>
                    <select id="value-select">
                        <option value="">relevance</option>
                        <option value="pr_min">price:min</option>
                        <option value="pr_max">price:max</option>
                    </select>
                </div>
            </div> 
        </header>
     );
}
 
export default Header;