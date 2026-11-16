import Dropdown from "./Dropdown"
import HeaderDropdown from './HeaderDropdown'


export default function ProductListControl () {
    return (
        <section className="list-control-container border">
            <SearchField/>
            <Filter/>
            <Sort/>
            <button>Reset</button>
        </section>
    )
}

function SearchField() {
    return (
        <div className="default-flex">
            <input type="text" placeholder="Zoek op product naam" />
            <p>placeholder voor error message</p>
        </div>
        
    )
}

function Filter () {
    return (
        <div className="default-flex">
            <HeaderDropdown name="Filter"/>
            <Dropdown/>
        </div>
            
    ) 
}

function Sort () {
    return (
        <div className="default-flex">
            <HeaderDropdown name="Sorteer"/>
            <Dropdown/>
        </div>
    )
}

