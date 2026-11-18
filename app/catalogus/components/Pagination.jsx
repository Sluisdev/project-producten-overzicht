'use client'

import ArrowBtn from "./ArrowBtn"
import { useRouter } from 'next/navigation'

export default function Pagination ({pages, currentPage}) {
    const router = useRouter()
    const disableBack = currentPage === 1
    const disableNext = currentPage === pages // true
    const lessThanEnd = currentPage === pages - 1 || disableNext
    return (
        <section className="pagination-container border">
            <button 
                onClick={() => router.push(`/catalogus?page=${currentPage - 1}`)} 
                disabled={disableBack} 
                className={disableBack ? "page-btn not-allowed" : "page-btn"}> back </button>
            {currentPage === 1 ? null : <button> {currentPage - 1}</button>}
            <button className="current-page ">{currentPage}</button>
            {disableNext ? null : <button >{currentPage + 1}</button>}
            <p hidden={lessThanEnd}>...</p>
            <button hidden={lessThanEnd}>{pages}</button>
                
            <button 
                onClick={() => router.push(`/catalogus?page=${currentPage + 1}`) } 
                disabled={disableNext} 
                className={disableNext ? "page-btn not-allowed" : "page-btn"}> next </button>
        </section>
    )
}