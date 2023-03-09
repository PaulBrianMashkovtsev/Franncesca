import {Route, Routes} from "react-router-dom";
import {Nav, NavLink} from "react-bootstrap";
import FirstHomeWork from "./HomeWork1/Main";

const App = () => {

    return (
        <div>
            <Nav>
                <NavLink href='/FirstHomeWork'>FirstHomeWork</NavLink>
            </Nav>

            <Routes>
                <Route path="/FirstHomeWork" element={<FirstHomeWork/>}/>
            </Routes>
        </div>
    );
}

export default App;
