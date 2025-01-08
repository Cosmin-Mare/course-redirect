"use client"

export default function Home() {
    function replaceLastCourse(event){
        event.preventDefault();
        fetch("/api/set", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ number: 2, url: event.currentTarget.elements.url.value }),
        });
    }
    return (
        <div>
            <form onSubmit={replaceLastCourse}>
                <input id="url"></input>
                <button style={{width: "100px", height:"100px"}}type="submit"></button>
            </form>
        </div>
    )
}