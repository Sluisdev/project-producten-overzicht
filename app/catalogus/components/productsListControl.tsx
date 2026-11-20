"use client"
"@/app/catalogus/components"
import Header from '@/app/catalogus/components/header'
import ArrowBtn from "@/app/catalogus/components/ArrowBtn"
import Dropdown from "@/app/catalogus/components/DropDown"
import { useRouter, useSearchParams, usePathname} from 'next/navigation'
import {use, Suspense, useState} from 'react'
import { FilterList, FilterValues, Categories } from '@/app/catalogus/lib/types'

export default function ProductListControl ({categories}:Categories) {
    const searchParams = useSearchParams()
    const {replace} = useRouter()
    const pathname = usePathname()
    const values = {filter: "", sorteer: "", zoek: ""}
    const [filterValues, setFilterValues] = useState(values)
    const [showFilters, setShowFilters] = useState(false)
    const updateParams = (paramName:string, value: string | false) => {
        
        const params = new URLSearchParams(searchParams)
        if (value && value.length >= 3) {
            // altijd de page op 1 zetten wanneer een filter wordt toegepast
            params.set("page", '1') 
            params.set(paramName, value)
        }  else {
            params.delete(paramName)
        }
        replace(`${pathname}?${params.toString()}`)
    }
    const handleFilters = (name: string, value:string) => {
        setFilterValues({...filterValues, [name]: value})
        updateParams(name, value)
    }

    const handleReset = () => {
        setFilterValues(values)
        replace(pathname)
    }
    return (
        <section className={showFilters ? "show-filters list-control-container" : "list-control-container"}>
            <button 
                className="access-filters"
                onClick={() => setShowFilters(!showFilters)}
                >
                <img src="/tune.svg" alt="" />
                
            </button>
            <div className="list-control-header filters-header">
                <h2>Filters</h2>
                <img src="/tune.svg" alt="" />
            </div>
            
            <SearchField handleFilters={handleFilters} searchValue={filterValues.zoek}/>
            <Suspense fallback="loading...">
                <Filter categories={categories} filterValues={filterValues} handleFilters={handleFilters} />
            </Suspense>
            <Sort filterValues={filterValues} handleFilters={handleFilters}/>
            <button onClick={handleReset} className="other-list-items reset-button">Reset</button>
        </section>
    )
}

function SearchField({handleFilters, searchValue}:Omit<FilterList, 'items' | 'name' | 'filterValues'>) {
    const needMore = searchValue.length >= 1 && searchValue.length < 3 
    return (
        <section className="flex-list-control">
            <Header name="zoek" className="list-control-header"/>
            <input 
                type="text" 
                placeholder="Zoek op product naam" 
                onChange={(e) => {
                    handleFilters("zoek", e.target.value)
                } }
                value={searchValue}
                className={needMore ? "border-error other-list-items" : "other-list-items"}
                id="zoek"
                />
            {needMore && <p className={needMore ? "error-message other-list-items" : "other-list-items"}>Voer minimaal 3 karakters in</p>}
            
        </section>
        
    )
}


function Sort ({filterValues, handleFilters}:Omit<FilterList, 'items' | 'name' | 'searchValue'>) {
    const values = ["oplopende prijzen", "aflopende prijzen"]
    const name = "sorteer" 
    return (
        <section className="flex-list-control">
            <Header name={name} className="list-control-header"/>
            <Dropdown items={values} filterValues={filterValues} handleFilters={handleFilters} name={name}/>
        </section>
    )
}

function Filter ({categories, filterValues, handleFilters}:Omit<FilterList, 'items' | 'name' | 'searchValue'> & {categories: Promise<string[]>} ) {
    const name = "categorie"
    const allCategories = use(categories)
    return (
    <section className="flex-list-control" >
        <Header name={name} className="list-control-header"/>
        <Dropdown items={allCategories} filterValues={filterValues} handleFilters={handleFilters} name={name}/>

    </section>
    )
}