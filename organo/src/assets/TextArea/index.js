import './TextArea.css'

const TextArea = (props) => {
    const placeholderModificada = `${props.placeholder}...`

    return (
        <div className="text-area">
            <label>{props.label}</label>
            <input placeholder={placeholderModificada}></input>
        </div>
    )
}

export default TextArea