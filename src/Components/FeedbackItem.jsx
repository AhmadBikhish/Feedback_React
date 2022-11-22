import { FaTimes } from 'react-icons/fa';
import Card from "./shared/Card";
import { useContext } from 'react';
import FeedbackContext from '../Context/FeedbackContext';

function FeedbackItem({item}) {

    const { deleteFeedback } = useContext(FeedbackContext);

    return (
        <Card>
            <div className="num-display">{item.rating}</div>
                <button className='close'><FaTimes color='purple' onClick={() => deleteFeedback(item.id)} /></button>
            <div className="text-display">{item.text}</div>
        </Card>
    );
}

export default FeedbackItem;