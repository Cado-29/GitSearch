'use client'

import { useState, useEffect } from "react"

export default function HistoryPage() {
    const [list, setList] = useState<any[]>([]);
    useEffect(() => {

        async function getHistory() {
            const res = await fetch(`/api/history`)
            const data = await res.json()
            setList(data.reverse())
        }

        getHistory();

    },[])

    return (
        <h1>
            {list.map((item, index) => (
                <li key={index}>{item?.name}</li>
            ) )}
        </h1>
    )
}