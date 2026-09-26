import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, batchYear, attendance, guestCount, message } = await request.json();

    const sheetId = process.env.GOOGLE_SHEET_ID;
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY;

    if (!sheetId || !clientEmail || !privateKey) {
      console.error("Environment variables Google Sheets belum lengkap!");
      return NextResponse.json(
        { message: "Konfigurasi server belum lengkap (.env.local)." },
        { status: 500 }
      );
    }

    if (!name || !attendance) {
      return NextResponse.json(
        { message: "Nama dan status kehadiran wajib diisi!" },
        { status: 400 }
      );
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const formattedDate = new Date().toLocaleString("id-ID", {
      timeZone: "Asia/Jakarta",
    });

    // Urutan Kolom: [Waktu, Nama, Angkatan, Status, Jumlah Tamu, Pesan]
    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "Sheet1!A:F",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[formattedDate, name, batchYear || "-", attendance, guestCount || 1, message || "-"]],
      },
    });

    return NextResponse.json(
      { message: "RSVP berhasil dikirim!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting RSVP:", error);
    return NextResponse.json(
      { message: "Gagal mengirim RSVP. Coba lagi nanti." },
      { status: 500 }
    );
  }
}