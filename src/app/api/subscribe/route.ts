import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with a fallback for build time
const resend = new Resend(process.env.RESEND_API_KEY || 'fallback-key-for-build');

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email format
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Send welcome email using Resend
    const { data, error } = await resend.emails.send({
      from: 'CtrlZ <onboarding@resend.dev>',
      to: [email],
      subject: '🎉 Welcome to CtrlZ Early Access!',
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; overflow: hidden;">
          <div style="padding: 40px; text-align: center; color: white;">
            <h1 style="font-size: 32px; margin-bottom: 20px; margin-top: 0;">🎊 You're In!</h1>
            <p style="font-size: 18px; margin-bottom: 30px; line-height: 1.6;">
              Welcome to the CtrlZ early access program! You're now part of an exclusive group getting first access to the future of productivity tools.
            </p>
            
            <div style="background: rgba(255,255,255,0.1); border-radius: 12px; padding: 30px; margin: 30px 0; backdrop-filter: blur(10px);">
              <h2 style="color: #fbbf24; margin-bottom: 20px; margin-top: 0; font-size: 24px;">🚀 What's Next?</h2>
              <ul style="text-align: left; font-size: 16px; line-height: 1.8; padding-left: 20px; margin: 0;">
                <li style="margin-bottom: 10px;">✅ You've secured your <strong>50% early access discount</strong> ($199 instead of $399)</li>
                <li style="margin-bottom: 10px;">🎯 Expected launch: <strong>Q2 2025</strong></li>
                <li style="margin-bottom: 10px;">📧 You'll receive exclusive updates on our development progress</li>
                <li style="margin-bottom: 10px;">🏆 Get a special <strong>Founder Badge</strong> when we launch</li>
                <li style="margin-bottom: 10px;">💬 Direct line to influence product development</li>
              </ul>
            </div>

            <div style="background: rgba(0,0,0,0.2); border-radius: 8px; padding: 20px; margin: 20px 0; border: 1px solid rgba(255,255,255,0.1);">
              <p style="margin: 0; font-size: 14px; line-height: 1.5;">
                💡 <strong>Pro Tip:</strong> Add this sender to your contacts so our updates don't go to spam! We'll only send you the most important updates.
              </p>
            </div>

            <div style="margin: 30px 0;">
              <a href="https://ctrlz.app" style="display: inline-block; background: #fbbf24; color: #1f2937; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 16px; transition: all 0.3s ease;">
                🌐 Visit Our Website
              </a>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1);">
              <p style="font-size: 14px; margin: 0; opacity: 0.9;">
                Have questions? Just reply to this email - we read every message!
              </p>
            </div>
          </div>
          
          <div style="background: rgba(0,0,0,0.3); padding: 20px; text-align: center; color: rgba(255,255,255,0.7);">
            <p style="margin: 0 0 5px 0; font-size: 12px;">
              CtrlZ - Take control of your productivity
            </p>
            <p style="margin: 0; font-size: 11px;">
              You received this because you signed up for early access at ctrlz.app
            </p>
          </div>
        </div>
      `
    });

    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json(
        { error: 'Failed to send welcome email. Please try again.' },
        { status: 500 }
      );
    }

    console.log('Welcome email sent successfully:', data?.id);

    return NextResponse.json({ 
      success: true, 
      message: 'Successfully subscribed! Check your email for next steps.',
      emailId: data?.id 
    });

  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}