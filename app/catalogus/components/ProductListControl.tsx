"use client"

import Dropdown from "./Dropdown"
import HeaderDropdown from './HeaderDropdown'

import { useRouter, useSearchParams, usePathname} from 'next/navigation'


export default function ProductListControl () {
    const searchParams = useSearchParams()
    const {replace} = useRouter()
    const pathname = usePathname()
    const updateParams = (paramName:string, value: string) => {
        const params = new URLSearchParams(searchParams)
        if (value) {
            params.set(paramName, value)
        } else {
            params.delete(paramName)
        }
        
        console.log("current Params", params.toString())
        replace(`${pathname}?${params.toString()}`)
    }
    return (
        <section className="list-control-container border">
            <SearchField updateParams={updateParams}/>
            <Filter updateParams={updateParams}/>
            <Sort updateParams={updateParams}/>
            <button>Reset</button>
        </section>
    )
}

function SearchField({updateParams}) {
    return (
        <div className="default-flex">
            <input type="text" placeholder="Zoek op product naam" onChange={(e) => updateParams('search', e.target.value)}/>
            <p>placeholder voor error message</p>
        </div>
        
    )
}


function Sort ({updateParams}) {
    return (
        <div className="default-flex">
            <HeaderDropdown name="Sorteer"/>
            <Dropdown/>
        </div>
    )
}