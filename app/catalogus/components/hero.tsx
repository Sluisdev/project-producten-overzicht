'use client'

import { usePathname } from "next/navigation"

import {libre} from '@/app/catalogus/lib/fonts'

export default function Hero () {
    const pathname = usePathname()
    const segmentName = pathname.split('/')[1]
    return (
    <section className={"hero" + " " + libre.className}>
        <h1>{`${segmentName.slice(0, 1).toUpperCase()}${segmentName.slice(1, segmentName.length)}`}</h1>
    </section>
    )
}