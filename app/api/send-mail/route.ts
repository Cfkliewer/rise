
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer'
import 'dotenv/config'

export async function POST(req: NextRequest, res: NextResponse) {

	const data = await req.json();
	const message = {
		to: "cfkliewer@gmail.com",
		subject: "lead",
		html: `<ul>
						<li>name: ${data.name}</li>
						<li>email: ${data.email}</li>
						<li>phone: ${data.phone}</li>
						<li>goals: ${data.goals}</li>
					 </ul>`
	}

	let transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS
		}
	})

	if(req.method === 'POST') {
		transporter.sendMail(message, (err, info) => {
			console.log("Error sending mail")
			console.log(err)
			return new Response("Success")
			
		});
	}
}

