import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";
import {Component} from "react";


class FirstHomeWork extends Component {
    render() {
        const name = "Hello Francesca!";
        const subject = "React JS";
        const greetings = "See you on wednesday!";

        return (
            <div>
                <Header name={name}/>
                <Content subject={subject}/>
                <Total greetings={greetings}/>
            </div>
        );
    }
}

export default FirstHomeWork;