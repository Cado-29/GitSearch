'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
    const router = useRouter();
    const [search, setSearch] = useState('');
    const [list, setList] = useState([]);

    const searchUser = async () => {
        const res = await fetch(
            `/api/search?search=${encodeURIComponent(search)}`
        );
        const data = await res.json();
        setList(data);
    }

    return (
        <div>
            <div className="textHome">
                <h1>Welcome to GitHub Search</h1>
                <input value={search} 
                onChange={(e) => {setSearch(e.target.value)}} 
                type="text"
                placeholder="Search....."></input>
                <button onClick={searchUser}>Search</button>
                <ul>
                    {list.map((item, index) => (
                        <li key={index} onClick={() => (router.push(`/search?user=${item}`))}>{item}</li>
                    )
                )}
                </ul>
            </div>
            <div className="historyButton">
                <button onClick={() => {
                    router.push('/pages/history');
                }}>History</button>

            </div>
        </div>
        


    );
}