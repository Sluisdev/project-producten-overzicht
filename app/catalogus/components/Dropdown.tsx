export default function Dropdown ({items, filterValues, handleFilters, name}:any) {
    return (
        <ul className="drop-down flex-list-control">
            {items && items.map((el:string) => {
                const selected = filterValues[name] === el
                //Eerste letter verandered naar een hoofdletter.
            return (<li 
                    key={el} 
                    className={selected ? "selected list-item" : "list-item"}
                    onClick={(event) => {event.stopPropagation(); handleFilters(name, el)}}
                    >
                        {`${el.slice(0, 1).toUpperCase()}${el.slice(1, (el.length))}`}
                    </li>)
            })}
        </ul>
    )
}