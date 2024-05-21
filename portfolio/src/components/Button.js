import "../styles/Button.css"
function Button(onClick, type, children) {
    return(
        <button 
      className="btn-default"
    //   onClick={}
    //   type={}
    >
      {children}
    </button>
    );
    
}
export default Button;