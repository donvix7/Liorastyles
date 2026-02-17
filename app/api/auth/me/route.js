import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
    try {
        const cookieStore = await cookies();
        const session = cookieStore.get("liora_session");

        if (!session) {
            return NextResponse.json({ success: false, error: "Not logged in" }, { status: 401 });
        }

        const userData = JSON.parse(session.value);
        return NextResponse.json({ success: true, data: userData });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
