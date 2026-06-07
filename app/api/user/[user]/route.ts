export async function GET(
  request: Request,
  { params }: { params: Promise<{ user: string }> }
) {
  const { user } = await params;

  const res = await fetch(
    `${process.env.github_api}/users/${user}`
  );

  const data = await res.json();

  return Response.json(data, { status: 200 });
}