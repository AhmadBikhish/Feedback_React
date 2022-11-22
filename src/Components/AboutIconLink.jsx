import { Link } from 'react-router-dom';
import { FaQuestion } from 'react-icons/fa';

const AboutIconLink = function(){
    return (
        <div dir='rtl'>
            <Link to="/about" className='btn'><FaQuestion></FaQuestion></Link>
        </div>
    );
}

export default AboutIconLink;