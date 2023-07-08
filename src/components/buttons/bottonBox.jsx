import Button from './button';
import './buttonBoxstyles.css';

const ButtonBox = ({buttons, handler1, handler2, handler3}) => {
    return(
        <div className = 'button-box'>
             {buttons.map((mybutton)=> {
                if(mybutton === '='){
                    return <Button value ={mybutton} onClick = {handler2}/>; 
                } else if(mybutton === "c"){
                    return <Button value ={mybutton} onClick = {handler3}/>; 
                }else{
                    return <Button value ={mybutton} onClick = {handler1}/>;
                } 
            })}

        </div>
    );
}

export default ButtonBox;