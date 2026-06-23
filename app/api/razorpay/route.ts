import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || "",
  key_secret: process.env.RAZORPAY_KEY_SECRET || "",
});

export async function POST(req: NextRequest) {
  try {
    const { amount, currency = "INR", receipt, notes } = await req.json();

    if (!amount) {
      return NextResponse.json(
        { error: "Amount is required" },
        { status: 400 }
      );
    }

    // Sanitize notes for Razorpay (max 15 keys, max 256 chars per value)
    const sanitizedNotes: Record<string, string> = {};
    if (notes && typeof notes === 'object') {
      Object.entries(notes).forEach(([key, value], index) => {
        if (index < 15 && value !== undefined && value !== null) {
          // Key: Only alphanumeric and underscores, max 40 chars
          const cleanKey = key.replace(/[^a-zA-Z0-9_]/g, '').substring(0, 40);
          if (cleanKey) {
            // Value: Convert to string, max 255 chars, remove emojis and newlines
            const stringValue = String(value)
              .replace(/[^\x00-\x7F]/g, "") // Remove non-ASCII characters (emojis)
              .replace(/\n/g, " ") // Replace newlines with spaces
              .replace(/\r/g, " ")
              .trim();
            sanitizedNotes[cleanKey] = stringValue.substring(0, 255);
          }
        }
      });
    }

    const options = {
      amount: Math.round(Number(amount) * 100), // Ensure amount is a number
      currency,
      receipt: (receipt || `rcpt_${Date.now()}`)
        .replace(/[^a-zA-Z0-9_\-]/g, '') // Only allow alphanumeric, underscores, hyphens
        .substring(0, 40), // Receipt max 40 chars
      notes: sanitizedNotes,
    };

    console.log("Attempting Razorpay Order creation with sanitized options...");

    try {
      const order = await razorpay.orders.create(options);
      return NextResponse.json(order);
    } catch (sdkError: any) {
      console.error("Razorpay SDK Error Object:", sdkError);
      return NextResponse.json(
        { 
          error: sdkError.description || sdkError.message || "Razorpay SDK error",
          details: sdkError
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error("General API Route Error:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
