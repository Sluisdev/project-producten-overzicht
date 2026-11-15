import ArrowBtn from "./ArrowBtn";

export default function HeaderDropDown ({name}:{name: string}) {

    return (
        <div className="header-dropdown">
            <p>{name}</p>
            <ArrowBtn />
        </div>
    )
           
}