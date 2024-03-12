import { Link } from 'react-router-dom';

const Soda = () => {
    return (
        <div className='soda'>
            <img src="https://www.shutterstock.com/image-vector/novi-sad-serbia-january-21-600nw-1008479416.jpg" alt="Rotating Image" className="rotate-image"></img>
            <div className='sodadiv'>
                <h3>OMG SUGAAAR</h3>
                <Link className="link-under" to="/">GO BACK</Link>
            </div>
        </div>
    )
}
export default Soda;