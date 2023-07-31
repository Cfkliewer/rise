
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
		secure: true,
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS
		}
	})

	console.log("user")
	console.log(process.env.EMAIL_USER)
	console.log("pass is")
	console.log(process.env.EMAIL_PASS)

	if(req.method === 'POST') {
		transporter.sendMail(message, (err, info) => {
			console.log("Error sending mail")
			console.log(err)

			console.log(info)
			return NextResponse.json({success: true})
			
		});
	}
}

