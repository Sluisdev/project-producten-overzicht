'use client'

export default function Error({error, retry}:{error: string, retry: Function}) {
    return <p>{error}, please return <a href="/products">home</a></p>
}