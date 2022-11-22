import FeedbackData from '../data/FeedbackData';
import { createContext, useState } from "react";
import { v4 as uuid } from 'uuid';

const FeedbackContext = createContext();

const FeedbackProvider = ({ children }) => {

    const [feedback, setFeedback] = useState(FeedbackData);

    const createFeedback = function(newFeedback){
        newFeedback.id = uuid();
        setFeedback([newFeedback, ...feedback]);
    }

    const deleteFeedback = function(id){
        if(window.confirm('Are you share to delete this feedback?')){
            setFeedback(feedback.filter(feedback => feedback.id !== id));
        }
    }

    return (
        <FeedbackContext.Provider value={{ feedback, createFeedback, deleteFeedback }}>
            { children }
        </FeedbackContext.Provider>
    );
}

export default FeedbackContext;
export { FeedbackProvider };