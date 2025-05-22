import { API_URL } from "@/app/constants/api";
import { NextResponse } from "next/server";

export async function GET( id: number ) {

  const apiUrl = `${API_URL}/api/department/findAllPublicStatistics/${id}`;

  const res = await fetch(apiUrl);

  if (!res.ok) {
    return NextResponse.json(
      { error: `Failed to fetch data for id: ${id}` },
      { status: res.status }
    );
  }

  const data = await res.json();

  return NextResponse.json(data);
}
