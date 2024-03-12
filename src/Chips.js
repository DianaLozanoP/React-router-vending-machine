import { useState } from "react";
import { Link } from 'react-router-dom';

const Chips = () => {
    const [bags, setBags] = useState(0);
    const addBags = () => {
        setBags(bags + 1);
    }
    return (
        <div>
            <div className="chips">
                <h4>BAGS EATEN: {bags}</h4>
                <button onClick={addBags}>NOM NOM NOM</button>
                <Link className="link-under" to="/">Go back</Link>
            </div>
        </div>
    )
}
export default Chips;