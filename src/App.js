
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";

const App = () => {
    const [images, setImages] = useState([]);
    const handleSubmit = async (term) => {
        //console.log(`Do a search using the term: ${term}`);
        const result = await searchImages(term);
        setImages(result);
    }
    return <div>
        <SearchBar onSubmit={handleSubmit}/>
        <ImageList images={images}/>
    </div>
}

export default App;