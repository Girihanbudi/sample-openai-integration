import type { NextApiRequest } from "next";
import { NextResponse, NextRequest } from "next/server";
import ResponseAPI, { generateHeader } from "@/common/response-api";
import { chatCompletion } from "@/libs/openai";
import Schema from "validate";
import { DefaultError } from "@/common/error-code";

type NextApiRequestProps = NextApiRequest & {
  body: {
    message: string;
  };
};

export const POST = async (request: NextRequest) => {
  const startTime = new Date();
  const req = await request.json();
  const putSchema = new Schema({
    message: {
      type: String,
      required: true,
    },
  });

  const schemaErrors = putSchema.validate(req);
  if (schemaErrors.length > 0) {
    return NextResponse.json(
      {
        header: generateHeader(
          startTime,
          "Failed to verify chat completion",
          schemaErrors.join(", ")
        ),
      },
      { status: 400 }
    );
  }

  try {
    const chatRes = await chatCompletion(req.message);

    return NextResponse.json({
      header: generateHeader(
        startTime,
        "Successfully generate response from openai"
      ),
      data: chatRes.data,
    });
  } catch (e: any) {
    return NextResponse.json(
      {
        header: generateHeader(
          startTime,
          "Failed generate response from openai",
          e.message
        ),
      },
      { status: 500 }
    );
  }
};
