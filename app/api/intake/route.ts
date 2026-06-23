import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { service, customer, intakeDetails, status } = data;

    console.log(`--- NEW INTAKE SUBMISSION [${status || 'N/A'}] ---`);
    console.log('Service:', service);
    console.log('Customer:', customer);
    console.log('Intake Details:', intakeDetails);
    console.log('-----------------------------');

    /**
     * TODO: Integrate with an email service like Resend or Nodemailer
     * to send this information to the astrologer.
     * 
     * Example with Resend:
     * 
     * const resend = new Resend(process.env.RESEND_API_KEY);
     * await resend.emails.send({
     *   from: 'VedAstraa <onboarding@resend.dev>',
     *   to: 'support@vedastraa.com', // Or astrologer's email
     *   subject: `[${status}] New Intake: ${service}`,
     *   text: `Customer: ${customer.name} (${customer.email})\n\nDetails:\n${intakeDetails}`,
     * });
     */

    return NextResponse.json({ 
      success: true, 
      message: 'Intake details submitted successfully' 
    });
  } catch (error) {
    console.error('Intake submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit intake details' }, 
      { status: 500 }
    );
  }
}
