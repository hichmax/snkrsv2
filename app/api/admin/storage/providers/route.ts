import { NextResponse } from "next/server";
import { assertAdminApi } from "@/lib/auth";
import { getStorageProviderStatuses } from "@/lib/storage";

export async function GET() {
  try {
    await assertAdminApi();
    return NextResponse.json({ providers: await getStorageProviderStatuses() });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Impossible de lire les stockages." },
      { status: 500 }
    );
  }
}
