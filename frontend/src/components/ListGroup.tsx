import { Fragment, useState } from "react";

function ListGroup() {
    let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
    const [selectedIndex, setSelectedIndex] = useState(-1);
    // items = [];
    const getMessage = () => {
        return items.length == 0 && <p>No item found</p>;
    };

    return (
        <Fragment>
            <h1>List</h1>
            {getMessage()}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className={
                            selectedIndex == index
                                ? "list-group-item active"
                                : "list-group-item"
                        }
                        key={item}
                        onClick={() => {
                            setSelectedIndex(index);
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </Fragment>
    );
}

export default ListGroup;
