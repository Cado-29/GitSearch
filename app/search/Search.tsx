'use client'

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { GithubUser } from "@/.next/dev/types/github-user"

export default function Search() {
    const searchParams = useSearchParams()
    const user = searchParams.get('user')
    const [data, setData] = useState<GithubUser | null>(null)

    useEffect(() => {
        if (!user) {
            return
        }
        async function fetchUser() {
            const res = await fetch(`/api/user/${user}`)
            const data = await res.json()
            setData(data)
        }

        fetchUser()

    },[user])

    return (
        <div>
            <p>username: {data?.login}</p>
            <p>name: {data?.name}</p>
            <p>bio: {data?.bio}</p>
            <p>account type: {data?.user_view_type}</p>
            <img src={data?.avatar_url} alt="profile pic"></img>
        </div>
        
    )
}