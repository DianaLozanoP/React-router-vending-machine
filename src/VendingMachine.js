import "./VendingMachine.css"
import { Link } from 'react-router-dom';

const VendingMachine = () => {
    return (
        <div className="home">
            <h2>HELLO I AM A VENDING MACHINE. WHAT WOULD YOU LIKE TO EAT?</h2>
            <Link to="/soda">SODA</Link>
            <Link to="/chips" className="link-margin">CHIPS</Link>
            <Link to="/sardines" className="link-margin">FRESH SARDINES</Link>
        </div>
    )
}
export default VendingMachine;