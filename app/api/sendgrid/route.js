import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
  const body = await request.json();
  const res = await sendgrid.send({
    to: process.env.EMAIL,
    from: process.env.EMAIL,
    subject: `${body.subject}`,
    text: `${body.message}`,
    html: `<div>You've got a mail from</div><div><b>Name:</b> ${body.name}</div><div><b>Email:</b> ${body.email}</div><div style="white-space: pre-line">${body.message}</div>`,
  });
  return Response.json({ res });
}
