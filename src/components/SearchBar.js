import {useState} from "react";

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

    return <div>
        <form onSubmit={handleFormSubmit}>           
           <input value={term} type="text" onChange= {handleChange}/>           
        </form>        
        {/* <button onClick={handleClick}>Click Me</button> */}
    </div>
}

export default SearchBar;