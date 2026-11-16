import ArrowBtn from "./ArrowBtn"

export default function Pagination () {
    return (
        <section className="pagination-container border">
            <ArrowBtn/>
            <button>Page Number</button>
            <ArrowBtn/>
        </section>
    )
}