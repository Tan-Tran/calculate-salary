import classes from './Button.module.css'
const Button  = (props) =>{ 
    const className = `${props.className}`
    return (
        <button className={className}>{props.children}</button>
    )
}

export default Button;