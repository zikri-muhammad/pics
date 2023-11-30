import { useState } from "react";
import './SearchImage.css';

function SearchImage({onSubmit}) {

    const [value, setValue] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(value)
        // console.log(value)
    }
    const handleChange = (event) => {
        setValue(event.target.value)
    }

	return (
		<div className="serch-bar">
            <form onSubmit={handleSubmit}>
                <input value={value} onChange={handleChange} />
            </form>
		</div>
	);
}

export default SearchImage;
