import './App.css';
import {BrowserRouter ,Routes, Route} from "react-router-dom";
import {Game} from "./pages/Game";



function App() {




    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/memory-game" element={<Game/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
