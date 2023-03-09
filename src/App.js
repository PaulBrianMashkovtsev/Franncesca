import {Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, NavLink} from "react-bootstrap";
import FirstHomeWork from "./HomeWork1/FirstHomeWork";
import SecondHomeWork from "./homeWork2/SecondHomeWork";

const App = () => {

    return (
        <div>
            <Nav>
                <NavLink href='/FirstHomeWork'>FirstHomeWork</NavLink>
                <NavLink href='/SecondHomeWork'>SecondHomeWork</NavLink>

            </Nav>

            <Routes>
                <Route path="/FirstHomeWork" element={<FirstHomeWork/>}/>
                <Route path="/SecondHomeWork" element={<SecondHomeWork/>}/>
            </Routes>
        </div>
    );
}

export default App;
