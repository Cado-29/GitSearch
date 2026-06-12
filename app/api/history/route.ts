import { connectDB } from "@/lib/mongodb";
import History from "@/models/History";

export async function GET(request: Request) {
    await connectDB();

    const histories = await History.find();

    return Response.json(histories, {status: 200});



}