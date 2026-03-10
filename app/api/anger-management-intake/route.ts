import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    try {
        const body = await request.json();

        // Admin email to receive the intake form
        const adminEmail = process.env.ADMIN_EMAIL || 'info@tjanehealth.com';

        const htmlContent = `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 20px;">
                <h2 style="color: #0d8943; border-bottom: 2px solid #0d8943; padding-bottom: 10px;">New Anger Management Intake & Assessment Form</h2>
                
                <h3 style="background-color: #f0fdf4; padding: 10px; border-radius: 5px;">1. Participant Information</h3>
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                    <tr><td style="padding: 8px; border: 1px solid #ddd; width: 40%;"><strong>Full Name:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${body.fullName}</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Date of Birth:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${body.dob}</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Gender:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${body.gender}</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone Number:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${body.phone}</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Email:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${body.email}</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Home Address:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${body.address}</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Emergency Contact Name:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${body.emergencyContactName}</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Emergency Contact Phone:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${body.emergencyContactPhone}</td></tr>
                </table>

                <h3 style="background-color: #f0fdf4; padding: 10px; border-radius: 5px;">2. Referral Information</h3>
                <p><strong>Referral Source:</strong> ${body.referralSource === 'Other' ? body.otherReferralSource : body.referralSource}</p>
                ${body.referralSource === 'Court Ordered' ? `
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                    <tr><td style="padding: 8px; border: 1px solid #ddd; width: 40%;"><strong>Court Name:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${body.courtName}</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Case Number:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${body.caseNumber}</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Probation Officer:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${body.probationOfficer}</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>PO Phone / Email:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${body.poContact}</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Required Completion Date:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${body.completionDate}</td></tr>
                </table>
                ` : ''}

                <h3 style="background-color: #f0fdf4; padding: 10px; border-radius: 5px;">3. History of Anger / Conflict</h3>
                <p><strong>Previously taken class?</strong> ${body.previousClass} ${body.previousClass === 'Yes' ? `(Date: ${body.previousClassDate})` : ''}</p>
                <p><strong>Behaviors:</strong></p>
                <ul>
                    <li>Physical fights: ${body.behaviors?.physicalFights || 'N/A'}</li>
                    <li>Domestic disputes: ${body.behaviors?.domesticDisputes || 'N/A'}</li>
                    <li>Verbal aggression: ${body.behaviors?.verbalAggression || 'N/A'}</li>
                    <li>Property damage: ${body.behaviors?.propertyDamage || 'N/A'}</li>
                    <li>Road rage incidents: ${body.behaviors?.roadRage || 'N/A'}</li>
                </ul>

                <h3 style="background-color: #f0fdf4; padding: 10px; border-radius: 5px;">4. Anger Triggers</h3>
                <p>${body.triggers?.join(', ') || 'None selected'}</p>
                ${body.triggers?.includes('Other') ? `<p><strong>Other:</strong> ${body.otherTrigger}</p>` : ''}

                <h3 style="background-color: #f0fdf4; padding: 10px; border-radius: 5px;">5. Typical Response to Anger</h3>
                <p>${body.responses?.join(', ') || 'None selected'}</p>
                ${body.responses?.includes('Other') ? `<p><strong>Other:</strong> ${body.otherResponse}</p>` : ''}

                <h3 style="background-color: #f0fdf4; padding: 10px; border-radius: 5px;">6. Anger Frequency</h3>
                <p><strong>Frequency:</strong> ${body.frequency}</p>
                <p><strong>Intensity:</strong> ${body.intensity}</p>

                <h3 style="background-color: #f0fdf4; padding: 10px; border-radius: 5px;">7. Consequences of Anger</h3>
                <ul>
                    <li>Relationships: ${body.consequences?.relationships || 'N/A'}</li>
                    <li>Employment: ${body.consequences?.employment || 'N/A'}</li>
                    <li>Legal problems: ${body.consequences?.legal || 'N/A'}</li>
                    <li>School performance: ${body.consequences?.school || 'N/A'}</li>
                    <li>Physical fights: ${body.consequences?.physicalFights || 'N/A'}</li>
                </ul>
                ${body.consequencesExplanation ? `<p><strong>Explanation:</strong><br/>${body.consequencesExplanation.replace(/\\n/g, '<br/>')}</p>` : ''}

                <h3 style="background-color: #f0fdf4; padding: 10px; border-radius: 5px;">8. Current Coping Skills</h3>
                <p>${body.copingSkills?.join(', ') || 'None selected'}</p>
                ${body.copingSkills?.includes('Other') ? `<p><strong>Other:</strong> ${body.otherCopingSkill}</p>` : ''}

                <h3 style="background-color: #f0fdf4; padding: 10px; border-radius: 5px;">9. Personal Goals for This Program</h3>
                <p>${body.goals?.join(', ') || 'None selected'}</p>
                ${body.goals?.includes('Other') ? `<p><strong>Other:</strong> ${body.otherGoal}</p>` : ''}
                ${body.participantGoals ? `<p><strong>Participant Goals (Explained):</strong><br/>${body.participantGoals.replace(/\\n/g, '<br/>')}</p>` : ''}

                <h3 style="background-color: #f0fdf4; padding: 10px; border-radius: 5px;">10. Self-Rating Anger Scale</h3>
                <p><strong>Rating:</strong> ${body.angerScale} / 10</p>

                <h3 style="background-color: #f0fdf4; padding: 10px; border-radius: 5px;">11. Participant Agreement</h3>
                <p><strong>Agreed to terms:</strong> ${body.agreed ? 'Yes' : 'No'}</p>
                <p><strong>Signature:</strong> ${body.signature}</p>
                <p><strong>Date:</strong> ${body.dateSigned}</p>
            </div>
        `;

        const data = await resend.emails.send({
            from: 'Tjane Health <onboarding@resend.dev>',
            to: [adminEmail],
            replyTo: body.email,
            subject: `Intake Form Submission: ${body.fullName}`,
            html: htmlContent
        });

        // Uncomment the line below if you also want to send a confirmation to the submitter
        /*
        await resend.emails.send({
            from: 'Tjane Health <onboarding@resend.dev>',
            to: [body.email],
            subject: \`Confirmation: Intake Form Received\`,
            html: \`<p>Hi \${body.fullName},</p><p>We have successfully received your Anger Management Intake & Assessment Form. Our team will review the details and get back to you shortly.</p><p>Thank you,<br/>Tjane Health</p>\`
        });
        */

        if (data.error) {
            return NextResponse.json({ error: data.error.message }, { status: 400 });
        }

        return NextResponse.json(data);
    } catch (error: any) {
        console.error("Failed to process intake form:", error);
        return NextResponse.json({ error: error.message || 'Error sending form' }, { status: 500 });
    }
}
