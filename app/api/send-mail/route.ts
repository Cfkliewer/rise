
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const receivingEmail = process.env.RECEIVING_EMAIL;

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Determine if this is a Kickstart inquiry
    const isKickstart = data.goals?.includes('Kickstart');
    const subject = isKickstart ? 'Kickstart - New Lead from Website' : 'New Lead from Website';

    const { data: emailResponse } = await resend.emails.send({
      from: 'Rise Bootcamp <onboarding@resend.dev>',
      to: [receivingEmail?.toString() ?? "crossfit822@gmail.com"],
      subject: subject,
      html: `<ul>
        <li>Name: ${data.name}</li>
        <li>Email: ${data.email}</li>
        <li>Phone: ${data.phone}</li>
        <li>Goals: ${data.goals}</li>
      </ul>`
    });

    return NextResponse.json({ success: true, id: emailResponse?.id });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    );
  }
}

