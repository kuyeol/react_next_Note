"use client";

import React, {useState} from 'react';


class Greeter {
    name: string;

    constructor(str: string) {
        this.name = str;

    }

    greet() {
        return "Hello, " + this.name;
    }

}


const greet1 = new Greeter("ung yeol");

const button = document.createElement("button");

button.textContent = "react Answer";

button.onclick = function () {
    alert(greet1.greet());
}

document.body.appendChild(button);


function Counter() {
    const [count, setCount] = useState(0); // Initial count is 0

    return (
        <div>
            <p>Count: </p>
                <h1> {count} </h1>
            <br/>
            <ul>
                <button onClick={() => setCount(count + 1)}> + Increment</button>
                <br/>
                <br/>
                <button onClick={() => setCount(prevCount => prevCount - 1)}> - Decrement</button>

            </ul>
        </div>
    );
}

export default function Home() {
    const [greeting, setGreeting] = useState(greet1.greet() + " : Before");


    const handleClick = () => {
        setGreeting(new Greeter("ung yeol : After").greet()); // Or update with logic
        // Optionally, you can still use alert if absolutely necessary:
        // alert(new Greeter("ung yeol").greet());
    };


    return (
        <>

            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <h1> main start</h1>
                <p>{greeting}</p> {/* Display the greeting */}
                <button onClick={handleClick}>React Answer</button>
                {greet1.greet()}
                {button.textContent}
                <Counter/>
                <br></br> <h1> main end</h1>
            </main>

            <footer className=" row-start-3  flex  gap-6 flex-wrap items-center justify-center">
                <h1> foo start</h1>


                <h1> foo end</h1>
            </footer>
        </>
    );
}
