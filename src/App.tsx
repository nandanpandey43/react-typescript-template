import { Counter } from "./ClickCounter"
import "./styles.css"


export const App = () =>  {
    
    return (
    <>
        <h1>
            React Typescript Webpack Template
        </h1>
        <br />
        <h3>
        env.NODE_ENV - {process.env.NODE_ENV}
        </h3>
        <h3>
        env.name - {process.env.name}
        </h3>
        <Counter />
    </>
    )
}