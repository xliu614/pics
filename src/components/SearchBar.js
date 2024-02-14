import {useState} from "react";
import "./SearchBar.css";

const SearchBar = ({onSubmit}) => {
    //this function should not be in use, but only to show that when click a button we can have input data 
    //sent back to the parent
    // const handleClick = () => {
    //     onSubmit('cars');
    // }

    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();        
        onSubmit(term);
    }

    const handleChange = (event) => {
        setTerm(event.target.value) 
    }

    return <div className="search-bar">
        <form onSubmit={handleFormSubmit}>
           <label>Enter Search Term</label>           
           <input value={term} type="text" onChange= {handleChange}/>           
        </form>        
        {/* <button onClick={handleClick}>Click Me</button> */}
    </div>
}

export default SearchBar;