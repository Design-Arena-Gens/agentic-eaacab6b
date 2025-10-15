import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validation
    const errors: string[] = [];

    if (!body.name || body.name.trim().length < 2) {
      errors.push("Name must be at least 2 characters long");
    }

    if (!body.email || !isValidEmail(body.email)) {
      errors.push("Valid email address is required");
    }

    if (!body.message || body.message.trim().length < 10) {
      errors.push("Message must be at least 10 characters long");
    }

    if (body.name && body.name.length > 100) {
      errors.push("Name must be less than 100 characters");
    }

    if (body.company && body.company.length > 100) {
      errors.push("Company name must be less than 100 characters");
    }

    if (body.message && body.message.length > 5000) {
      errors.push("Message must be less than 5000 characters");
    }

    if (errors.length > 0) {
      return NextResponse.json(
        { error: errors.join(", "), success: false },
        { status: 400 }
      );
    }

    // Log the submission (in production, you would save to database or send email)
    const submission = {
      timestamp: new Date().toISOString(),
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      company: body.company?.trim() || null,
      message: body.message.trim(),
      userAgent: request.headers.get("user-agent"),
      ip: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip")
    };

    console.log("Contact form submission:", JSON.stringify(submission, null, 2));

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message. We'll get back to you soon!",
        submissionId: generateSubmissionId()
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error", success: false },
      { status: 500 }
    );
  }
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function generateSubmissionId(): string {
  return `sub_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}
