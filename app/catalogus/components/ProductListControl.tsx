"use client"

import Dropdown from "./Dropdown"
import Header from './HeaderDropdown'
import '@/app/catalogus/styles/productListControls.css'

import { useRouter, useSearchParams, usePathname} from 'next/navigation'
import {use, Suspense, useState} from 'react'




export default function ProductListControl ({categories}) {
    const searchParams = useSearchParams()
    const {replace} = useRouter()
    const pathname = usePathname()
    const values = {filter: "", sorteer: "", zoek: ""}
    const [filterValues, setFilterValues] = useState(values)
    const updateParams = (paramName:string, value: string | false) => {
        
        const params = new URLSearchParams(searchParams)
        if (value && value.length >= 3) {
            params.set(paramName, value)
        }  else {
            params.delete(paramName)
        }
        replace(`${pathname}?${params.toString()}`)
    }
    const handleFilters = (name: string, value:string) => {
        console.log("who called the function:", name, value)
        setFilterValues({...filterValues, [name]: value})
        updateParams(name, value)
    }

    const handleReset = () => {
        setFilterValues(values)
        replace(pathname)
    }
    return (
        <section className="list-control-container border">
            <SearchField handleFilters={handleFilters} searchValue={filterValues.zoek}/>
            <Suspense fallback="loading...">
                <Filter updateParams={updateParams} categories={categories} filterValues={filterValues} handleFilters={handleFilters} />
            </Suspense>
            <Sort updateParams={updateParams} filterValues={filterValues} handleFilters={handleFilters}/>
            <button onClick={handleReset} className="other-list-items reset-button">Reset</button>
        </section>
    )
}

function SearchField({handleFilters, searchValue}) {
    const needMore = searchValue.length >= 1 && searchValue.length < 3 
    return (
        <section className="flex-list-control">
            <Header name="zoek"/>
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
            {needMore && <p className={needMore ? "error-message" : ""}>minimaal 3 karakters nodig</p>}
            
        </section>
        
    )
}


function Sort ({updateParams, filterValues, handleFilters}) {
    const values = ["oplopende prijzen", "aflopende prijzen"]
    const name = "sorteer" 
    return (
        <section className="flex-list-control">
            <Header name={name}/>
            <Dropdown items={values} filterValues={filterValues} handleFilters={handleFilters} name={name}/>
        </section>
    )
}

function Filter ({categories, updateParams, filterValues, handleFilters}: {filterValues: {filter:string, sorteer:string, search: string}}) {
    const name = "filter"
    const allCategories:string[] | undefined = use(categories)

    return (
    <section className="flex-list-control">
        <Header name={name}/>
        <Dropdown items={allCategories} filterValues={filterValues} handleFilters={handleFilters} name={name}/>

    </section>
    )
}