'use client'

import ArrowBtn from "./ArrowBtn"
import { useRouter } from 'next/navigation'

export default function Pagination ({pages, currentPage}) {
    const router = useRouter()
    const disableBack = currentPage === 1
    const disableNext = currentPage === pages // true
    const lessThanFour = pages < 4 
    return (
        <section className="pagination-container border">
            <button onClick={() => router.push(`/catalogus?page=${currentPage - 1}`)} disabled={disableBack}>back</button>
            {currentPage === 1 ? null : <button> {currentPage - 1}</button>}
            <button>{currentPage}</button>
            {disableNext ? null : <button >{currentPage + 1}</button>}
            <p hidden={lessThanFour}>..</p>
            <button hidden={lessThanFour}>{pages}</button>
                
            <button onClick={() => router.push(`/catalogus?page=${currentPage + 1}`) }disabled={currentPage === pages}>next</button>
        </section>
    )
}