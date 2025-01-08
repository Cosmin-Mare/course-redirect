import { useEffect } from "react"

export default function Home() {
    useEffect(() => {
        fetch("/api/get", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ number: 2}),
        }).then((res) => 
            res.json().then((res) => {window.location.replace(res.url)})
        )
    })
    return (
        <></>
    )
}