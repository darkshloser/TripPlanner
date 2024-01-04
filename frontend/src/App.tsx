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
import FormReactHook from "./components/FormReactHook";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/categories";

function App() {
    const [alertVisible, setAlertVisibility] = useState(false);
    const [cartItems, setCartItems] = useState(["Product1", "Product2"]);
    let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

    const handleSelectItem = (item: string) => {
        console.log(item);
    };

    const [selectedCategory, setSelectedCategory] = useState("");

    const [expenses, setExpenses] = useState([
        { id: 1, description: "desc text", amount: 10, category: "Utilities" },
        {
            id: 2,
            description: "desc 2 text",
            amount: 102,
            category: "Utilities",
        },
    ]);

    const visibleExpenses = selectedCategory
        ? expenses.filter((e) => e.category === selectedCategory)
        : expenses;

    return (
        <div>
            <div className="mb-5">
                <ExpenseForm
                    onSubmit={(expense) =>
                        setExpenses([
                            ...expenses,
                            { ...expense, id: expenses.length + 1 },
                        ])
                    }
                />
            </div>
            <div className="mb-3">
                <ExpenseFilter
                    onSelectCategory={(category) =>
                        setSelectedCategory(category)
                    }
                />
            </div>
            <ExpenseList
                expenses={visibleExpenses}
                onDelete={(id) =>
                    setExpenses(expenses.filter((e) => e.id !== id))
                }
            />
            <NavBar cartItemsCount={cartItems.length} />
            <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
            <Form />
            <br />
            <FormState />
            <br />
            <FormReactHook />
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
