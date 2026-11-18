import ArrowBtn from "./ArrowBtn";

export default function Header ({name}:{name: string}) {

    return (
        <div className="header-dropdown">
            <h3>{`${name.slice(0, 1).toUpperCase()}${name.slice(1, name.length)}`}</h3>
        </div>
    )
           
}