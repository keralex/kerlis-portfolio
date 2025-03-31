import './App.css';
import Contact from './organisms/Contact/Contact';
import Experiences from './organisms/Experiences/Experiences';
import Presentation from './organisms/Presentation/Presentation';
import Profile from './organisms/Profile/Profile';

function App() {
    return (
        <>
            <Presentation />
            <div id="profile">
                <Profile />
            </div>
            <div id="experience">
                <Experiences />
            </div>
            <div id="contact">
                <Contact />
            </div>
        </>
    );
}

export default App;
