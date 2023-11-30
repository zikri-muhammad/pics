import SearchImage from "./components/SearchImage";
import handlerApi from "./api";
import { useState } from "react";
import ImageList from "./components/ImageList";

function App() {

    const [images, setImages] = useState([])
    const handleClick = async (term) => {
        // setValue(value)
        const result = await handlerApi(term)
        setImages(result)
    }

	return (
        <div className='App'> 
            <SearchImage onSubmit={handleClick} />
            <ImageList images={images} />
		</div>
	);
}

export default App;
