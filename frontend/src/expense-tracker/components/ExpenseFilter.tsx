import React from "react";
import categories from "../categories";

interface ExpenseFilterProps {
    onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: ExpenseFilterProps) => {
    return (
        <select
            name=""
            id=""
            className="form-select"
            onChange={(event) => onSelectCategory(event.target.value)}
        >
            <option value="">All categories</option>
            {categories.map((category) => (
                <option value={category} key={category}>
                    {category}
                </option>
            ))}
        </select>
    );
};

export default ExpenseFilter;
