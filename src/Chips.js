import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Chip from "./Chip";
import { v1 as uuid } from "uuid";

const Chips = () => {
    const [bags, setBags] = useState(0);
    const [images, setImages] = useState([])
    const addBags = () => {
        setBags(bags + 1);
        setImages([...images, { id: uuid, top: `${Math.random() * 80}vh`, left: `${Math.random() * 80}vw` }])
    }
    const displayChips = images.map(img => (
        <Chip id={img.id} top={img.top} left={img.left} />
    ))
    return (
        <div>
            {images.length !== 0 ?
                displayChips : null}
            <div className="chips">
                <h4>BAGS EATEN: {bags}</h4>
                <button onClick={addBags}>NOM NOM NOM</button>
                <Link className="link-under" to="/">Go back</Link>
            </div>
        </div>
    )
}
export default Chips;