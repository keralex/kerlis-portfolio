import './App.css';
import Presentation from './organisms/Presentation/Presentation';
import Profile from './organisms/Profile/Profile';

function App() {
    return (
        <>
            <Presentation />
            <div id="profile">
                <Profile />
            </div>
        </>
    );
}

export default App;
