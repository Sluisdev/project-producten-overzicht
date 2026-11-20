import ArrowBtn from "@/app/catalogus/components/ArrowBtn";

export default function Header ({name, className}:{name: string, className: string}) {

    return (
        <div className={className + " " + "filter-item"}>
            <img src={`/${name}.svg`} alt="" />
            <h3>{`${name.slice(0, 1).toUpperCase()}${name.slice(1, name.length)}`}</h3>
        </div>
    )
           
}