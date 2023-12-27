import { Fragment, useState } from "react";

interface ListGroupProps {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const getMessage = () => {
        return items.length == 0 && <p>No item found</p>;
    };

    return (
        <Fragment>
            <h1>{heading}</h1>
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
                            onSelectItem(item);
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
