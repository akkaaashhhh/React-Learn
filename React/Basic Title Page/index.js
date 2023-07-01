import Header from "./Header.js"

function Content(){
    return ( 
        <div>
            <Header />
            <h1>Fun things about React</h1>
            <ul>
                <li>was first released in 2013</li>
                <li>was originally created by Jordan Walke</li>
                <li>is maintained by facebook</li>
            </ul>
        </div>
    )
}


ReactDOM.render(<Content />,document.querySelector(".content"))


// const h1 = document.createElement("h1")
// h1.textContent = "this is the imperative way"
// h1.className = "header"
// document.getElementById("root").append(h1)