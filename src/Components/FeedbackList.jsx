import PropTypes from 'prop-types';
import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from 'framer-motion';

function FeedbackList({feedback, handleDelete}) {

    if(!feedback || feedback.length === 0){
        return <p>No Feedback Yet!</p>;
    }

    return (
        <div className="feedback-list">
            <AnimatePresence>
                {feedback.map((feedback, index) => (
                    <motion.div key={index} initial={{ opacity: 0, marginTop: '-20px' }} animate={{ opacity: 1, marginTop: '0px' }}
                        exit={{ opacity: 0 }}>
                        <FeedbackItem key={index} item={feedback} handleDelete={handleDelete} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );

    // return (
    //     <div className="feedback-list">
    //         {feedback.map((feedback, index) => (
    //             <FeedbackItem key={index} item={feedback} handleDelete={handleDelete} />
    //         ))}
    //     </div>
    // );
}

FeedbackList.propTypes = {
    feedback: PropTypes.array,
    // feedback: PropTypes.arrayOf(PropTypes.shape({
    //     id: PropTypes.number.isRequired,
    //     text: PropTypes.string.isRequired,
    //     rating: PropTypes.number.isRequired,
    // })),
}

export default FeedbackList;