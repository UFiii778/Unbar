import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, attendance, guestCount, message } = await request.json();

    // 1. Cek Ketersediaan Environment Variables
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

    // 2. Validasi Input
    if (!name || !attendance) {
      return NextResponse.json(
        { message: "Nama dan status kehadiran wajib diisi!" },
        { status: 400 }
      );
    }

    // 3. Autentikasi Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // 4. Format Tanggal
    const formattedDate = new Date().toLocaleString("id-ID", {
      timeZone: "Asia/Jakarta",
    });

    // 5. Append Data ke Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "Sheet1!A:E", // Pastikan nama tab di Google Sheet kamu adalah 'Sheet1' (sesuaikan jika 'Sheet 1' atau 'Halaman 1')
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[formattedDate, name, attendance, guestCount || 1, message || "-"]],
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