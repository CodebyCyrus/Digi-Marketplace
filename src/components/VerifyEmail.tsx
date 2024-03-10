"use client";

import { trpc } from "@/trpc/client";

interface VerifyEmailProps {
  token: string;
}

const VerifyEmail = ({ token }: VerifyEmailProps) => {
  const {} = 
    const {} = trpc.auth.verifyEmail.useQuery({
      token,
    });
  };

export default VerifyEmail;
