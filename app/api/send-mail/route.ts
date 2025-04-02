
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer'
import 'dotenv/config'

export async function POST(req: NextRequest, res: NextResponse) {

	const data = await req.json();
	const message = {
		from: {
			name: 'crossfit822.com',
			address: 'crossfit822@gmail.com'
		},
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

	await new Promise((resolve, reject) => {
		transporter.verify(function (error, success) {
			if(error) {
				console.log(error)
				reject(error);
			} else {
				resolve(success)
			}
		})
	});

	await new Promise((resolve, reject) => {
		if(req.method === 'POST') {
			transporter.sendMail(message, (err, info) => {
				if(err) {
					console.log("Error sending mail")
					console.log(err)
					reject(err)
				} else {
					console.log(info)
					resolve(info)
				}
			});
		}
	});

	return NextResponse.json({success: true})
}

