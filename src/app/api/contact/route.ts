import { NextResponse, NextRequest } from "next/server"
import { Resend } from 'resend'

const handler = async (req: NextRequest) => {

  const body = await req.json()

  const resend = new Resend(
    process.env.RESEND_API_KEY as string
  )

  try {
    await resend.emails.send({
      from: process.env.RESEND_EMAIL_FROM as string,
      to: process.env.RESEND_EMAIL_TO as string,
      subject: 'Nuevo contacto desde vicentejorquera.dev',
      html: `
      <style>
      body {
        font-family: sans-serif;
        margin: 0;
        padding: 0;
        background-color: #fff;
      }
  
      h2 {
        font-size: 1.5rem;
        font-weight: bold;
        margin-top: 0;
      }
  
      p {
        font-size: 1rem;
        margin-bottom: 1rem;
      }
  
      hr {
        border: 1px solid #ccc;
        margin: 2rem 0;
      }
  
      .container {
        width: 600px;
        margin: 25px auto;
      }
  
      .info {
        display: flex;
        flex-direction: column;
        margin-bottom: 2rem;
      }
  
      .name {
        font-size: 1.2rem;
        font-weight: bold;
      }
  
      .email,
      .phone {
        font-size: 1rem;
      }
  
      .message {
        margin-bottom: 0;
      }
  
      .button {
        background-color: #008CBA;
        color: #fff;
        font-size: 1rem;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
      }
    </style>
        <body>
        <div class="container">
        <h2>Tienes un nuevo contacto de: ${body.email}</h2>
        <hr>
        <div class="info">
          <p class="name">${body.name}</p>
          <p class="email">${body.email}</p>
          <p class="phone">${body.phone}</p>
        </div>
        <p class="message">${body.message}</p>
        <hr>
        <a href="#" class="button">Responder</a>
        <p>¡Gracias por usar nuestro servicio de contacto!</p>
      </div>
        </body>
      `
    })
  
    return new NextResponse(JSON.stringify({ message: 'enviado correctamente'}), { status: 200 })
  } catch (error: any) {
    console.log(error)
    
    return new NextResponse(JSON.stringify(error), { status: 500 })
  }

 
}

export {
  handler as POST
}