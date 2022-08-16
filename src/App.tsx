import "./styles.css"


export const App = () =>  {
    return <h1>
        React Typescript Webpack Template
        {/* <br /> */}
        <br />
        <h5>
        env.NODE_ENV - {process.env.NODE_ENV}
        </h5>
        <h5>
        env.name - {process.env.name}
        </h5>
    </h1>
}