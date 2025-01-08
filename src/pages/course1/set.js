"use client"

import { useEffect } from "react";

export default function Home() {
    function replaceLastCourse(event){
        event.preventDefault();
        fetch("/api/set", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ number: 1, url: event.currentTarget.elements.url.value }),
        });
    }

    useEffect(() => {
        fetch("/api/get", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ number: 1}),
        }).then((res1) => 
            
            res1.json().then((res) => {console.log(res.url); document.getElementById("url").value = res.url})
        )
    }, [])
    return (
        <div>
            <form onSubmit={replaceLastCourse}>
                <input id="url"></input>
                <button style={{width: "100px", height:"100px"}}type="submit"></button>
            </form>
        </div>
    )
}