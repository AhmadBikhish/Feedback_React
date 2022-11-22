import Card from "../Components/shared/Card";
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const AboutPage = function(){
    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
                <Card>
                    <div className="about">
                        <h1>About This Project</h1>
                        <p>This is a React app to leave feedback for a product or service</p>
                        <p>Version: 1.0.0</p>

                        <Link to="/" style={{ display: 'block' }}>Back To Home</Link>
                    </div>
                </Card>
            </motion.div>
        </AnimatePresence>
    );
}

export default AboutPage;