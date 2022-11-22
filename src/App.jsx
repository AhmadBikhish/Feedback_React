import { useState } from "react";
import FeedbackData from './data/FeedbackData';
import { v4 as uuid } from 'uuid';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//components
import FeedbackList from "./Components/FeedbackList";
import Header from "./Components/Header";
import FeedbackStats from "./Components/FeedbackStats";
import FeedbackForm from "./Components/FeedbackForm";
import AboutPage from "./Pages/AboutPage";
import AboutIconLink from "./Components/AboutIconLink";

const App = function(){
    
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
        <BrowserRouter>
            <Header />
            <div className="container">
                <Routes>
                    <Route path="/" element={
                        <>
                            <FeedbackForm handleCreate={createFeedback} />
                            <FeedbackStats feedback={feedback} />
                            <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
                            <AboutIconLink />
                        </>
                    } />
                        

                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;