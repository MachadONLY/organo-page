import './List.css'

const List = (props) => {
    console.log(props.itens)

    return (
        <div className='List'>
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default List 