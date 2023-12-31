import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Message from "./components/ListGroup";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import Like from "./components/Like";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Form from "./components/Form";
import FormState from "./components/FormState";

function App() {
    const [alertVisible, setAlertVisibility] = useState(false);
    const [cartItems, setCartItems] = useState(["Product1", "Product2"]);
    let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

    const handleSelectItem = (item: string) => {
        console.log(item);
    };

    return (
        <div>
            <NavBar cartItemsCount={cartItems.length} />
            <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
            <Form />
            <br />
            <FormState />
            <Like />
            <Button color="primary" onClick={() => setAlertVisibility(true)}>
                My Button
            </Button>
            {alertVisible && (
                <Alert onClose={() => setAlertVisibility(false)}>
                    Hello <span>World</span>
                </Alert>
            )}
            <ListGroup
                items={items}
                heading="Cities"
                onSelectItem={handleSelectItem}
            />
        </div>
    );
}

export default App;
