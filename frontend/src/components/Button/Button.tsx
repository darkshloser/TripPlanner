import styles from "./Button.module.css";

interface ButtonProps {
    children: string;
    color?: "primary" | "secondary" | "danger" | "success";
    onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: ButtonProps) => {
    return (
        <button
            className={[styles.btn, styles["btn-" + color]].join(" ")}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
