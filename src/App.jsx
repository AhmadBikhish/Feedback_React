import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FeedbackProvider } from './Context/FeedbackContext';

//components
import FeedbackList from "./Components/FeedbackList";
import Header from "./Components/Header";
import FeedbackStats from "./Components/FeedbackStats";
import FeedbackForm from "./Components/FeedbackForm";
import AboutPage from "./Pages/AboutPage";
import AboutIconLink from "./Components/AboutIconLink";

const App = function(){
    return (
        <BrowserRouter>
            <FeedbackProvider>
                <Header />
                <div className="container">
                    <Routes>
                        <Route path="/" element={
                            <>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />
                                <AboutIconLink />
                            </>
                        } />
                            

                        <Route path="/about" element={<AboutPage />} />
                    </Routes>
                </div>
            </FeedbackProvider>
        </BrowserRouter>
    );
}

export default App;