import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Message from "./components/ListGroup";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
    let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

    const handleSelectItem = (item: string) => {
        console.log(item);
    };

    return (
        <div>
            <Button color="primary" onClick={() => console.log("Clicked")}>
                My Button
            </Button>
            <Alert>
                Hello <span>World</span>
            </Alert>
            <ListGroup
                items={items}
                heading="Cities"
                onSelectItem={handleSelectItem}
            />
        </div>
    );
}

export default App;
