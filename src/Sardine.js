import { Link } from 'react-router-dom';

const Sardine = () => {
    return (
        <div className="sardines">
            <h2>YOU DON'T EAT THE SARDINES. THE SARDINES, THEY EAT YOU! GO BACK</h2>
            <Link className="link-under" to="/">Go back</Link>
        </div>
    )
}
export default Sardine;