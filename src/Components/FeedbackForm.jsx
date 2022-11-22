import { useContext, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card";
import FeedbackContext from "../Context/FeedbackContext";

const FeedbackForm = function(){

    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');

    const {createFeedback} = useContext(FeedbackContext);

    const handleTextChange = e => {
        const value = e.target.value;

        if(value.length === 0){
            setBtnDisabled(true);
            setMessage(null);
        }
        else if(value.trim().length <= 10){
            setBtnDisabled(true);
            setMessage('Text must be at least 10 characters!');
        }
        else {
            setBtnDisabled(false);
            setMessage(null);
        }

        setText(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(text.trim().length > 10){
            const newFeedback = { text, rating };
            createFeedback(newFeedback);

            setText('');    
        }
    }

    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Card>
                    <form onSubmit={handleSubmit}>
                        <h2>How would you are rate your service with us?</h2>
                        <RatingSelect setRating={setRating} />
                        <div className="input-group">
                            <input type="text" placeholder="Write a review" onChange={handleTextChange} value={text} />
                            <Button version="secondary" type="submit" isDisabled={btnDisabled}>Send</Button>
                        </div>
                        {message && <div className="message">{message}</div>}
                    </form>
                </Card>
            </motion.div>
        </AnimatePresence>
    );
}

export default FeedbackForm;