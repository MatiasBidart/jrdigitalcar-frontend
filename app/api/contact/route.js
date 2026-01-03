import nodemailer from "nodemailer";

export async function POST(req) {

  try {
    const { name, email, phone, service, message } = await req.json();

    // Configurar el transporter de Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail", // o tu proveedor (e.g. Outlook, Yahoo)
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Configurar el contenido del email
    const mailOptions = {
      from: `"Formulario Web" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER,
      subject: `Nuevo mensaje de contacto de ${name}`,
      text: `
        Nombre: ${name}
        Email: ${email}
        Phone: ${phone}
        Service: ${service}
        Mensaje: ${message}
      `,
    };

    // Enviar el correo
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Correo enviado correctamente" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error enviando correo:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Error al enviar el correo" }),
      { status: 500 }
    );
  }
}
