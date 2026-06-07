export async function GET(request: Request) {
    const {searchParams} = new URL(request.url);
    const search = searchParams.get('search');
    console.log(search);
    const res = await fetch(`${process.env.github_api}/search/users?q=${search}`)
    const data = await res.json();
    const response = [];
    for(let i=0; i<data.items.length;i++) {
        response[i] = data.items[i].login;
    }
    return Response.json(response);
}