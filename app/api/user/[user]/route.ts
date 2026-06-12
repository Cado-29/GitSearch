import { connectDB } from "@/lib/mongodb";
import History from "@/models/History";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ user: string }> }
) {
  const { user } = await params;

  const res = await fetch(
    `${process.env.github_api}/users/${user}`
  );

  const data = await res.json();

  storeHistory(user);

  return Response.json(data, { status: 200 });
}

async function storeHistory(user: string) {
  await connectDB();

  const existingUser = await History.findOne({name: user});


  if (existingUser) {
    existingUser.updatedAt = new Date();
    await existingUser.save();
  } else {
    await History.create({name: user});
  }
}