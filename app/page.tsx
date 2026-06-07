'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [list, setList] = useState([]);

  const searchUsers = async () => {
    const res = await fetch(
      `/api/search?search=${encodeURIComponent(search)}`
    );
    const data = await res.json();
    setList(data);
  }

  return (
    <div>
      <h1>Welcome to GitHub Search</h1>
      <input type="text" 
      value={search} 
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search....."></input>
      <button onClick={searchUsers}>Search</button>
      <ul>
        {list.map((item, index) => (
          <li key={(index)} onClick={() => router.push(`/search?user=${item}`)}>{item}</li>
        ))}

      </ul>
    </div>
  )
}