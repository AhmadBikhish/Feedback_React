import FeedbackData from '../data/FeedbackData';
import { createContext, useState } from "react";
import { v4 as uuid } from 'uuid';

const FeedbackContext = createContext();

const FeedbackProvider = ({ children }) => {

    const [feedback, setFeedback] = useState(FeedbackData);
    const [feedbackEdit, setFeedbackEdit] = useState({feedback: {}, edit: false});

    const editFeedback = function(feedback){
        setFeedbackEdit({feedback, edit: true});
    }

    const createFeedback = function(newFeedback){
        newFeedback.id = uuid();
        setFeedback([newFeedback, ...feedback]);
    }

    const updateFeedback = function(id, updatedFeedback){
        setFeedback(feedback.map(feedback => feedback.id === id ? {...feedback, ...updatedFeedback} : feedback));
    }

    const deleteFeedback = function(id){
        if(window.confirm('Are you share to delete this feedback?')){
            setFeedback(feedback.filter(feedback => feedback.id !== id));
        }
    }

    return (
        <FeedbackContext.Provider value={{ feedback, createFeedback, editFeedback, deleteFeedback,
            feedbackEdit, updateFeedback }}>
            { children }
        </FeedbackContext.Provider>
    );
}

export default FeedbackContext;
export { FeedbackProvider };