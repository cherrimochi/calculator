import './buttonBoxstyles.css';

const Button = ({value ,onClick }) => {

  let classy = `button${value}`;
  if(value === "="){
    classy = "buttonEquals";
  }
  
    return( <button className={classy} onClick={onClick}>
      {value}
    </button>);
}

export default Button;
