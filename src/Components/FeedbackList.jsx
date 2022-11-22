import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import FeedbackContext from '../Context/FeedbackContext';

function FeedbackList() {

    const {feedback} = useContext(FeedbackContext);

    if(!feedback || feedback.length === 0){
        return <p>No Feedback Yet!</p>;
    }

    return (
        <div className="feedback-list">
            <AnimatePresence>
                {feedback.map((feedback, index) => (
                    <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}>
                        <FeedbackItem key={index} item={feedback} />
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

export default FeedbackList;