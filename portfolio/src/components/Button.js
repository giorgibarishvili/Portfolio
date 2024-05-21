import "../styles/Button.css";

function Button({ onClick, type, children }) {
    return (
        <button
            className="btn-default"
            onClick={onClick}
            type={type}
        >
            <span>{children}</span>
            <i></i>
        </button>
    );
}

export default Button;
