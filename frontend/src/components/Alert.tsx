import React, { ReactNode } from "react";

interface AlertProps {
    children: ReactNode;
    onClose: () => void;
}

const Alert = ({ children, onClose }: AlertProps) => {
    return (
        <div className="alert alert-primary alert-dismissible">
            {children}
            <button
                type="button"
                className="btn-close"
                onClick={onClose}
                data-bs-dismiss=""
            ></button>
        </div>
    );
};

export default Alert;
