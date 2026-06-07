'use client'

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { GithubUser } from "@/.next/dev/types/github-user"

export default function Search() {
    const searchParams = useSearchParams()
    const user = searchParams.get('user')
    const [data, setdata] = useState<GithubUser | null>(null)

    useEffect(() => {
        fetch(`/api/user/${user}`)
        .then((res) => res.json())
        .then((data) => {
            setdata(data)
        })
    },[user])

    return (
        <div>
            <p>username: {data?.login}</p>
            <p>name: {data?.name}</p>
            <p>bio: {data?.bio}</p>
            <p>account type: {data?.user_view_type}</p>
        </div>
        
    )
}