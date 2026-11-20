'use client'

import "@/app/catalogus/styles/error.css"

export default function Error({error, retry}:{error: string, retry: Function}) {
    console.log("foutmelding:", error)
    return (
        <section className="error">
            <div>
                <img src="/error.svg" alt="error" />
                <p> Helaas ging er wat fout! </p>
            </div>
            
            <button onClick={() => retry()}>Probeer opnieuw</button>
        </section>
    )
}