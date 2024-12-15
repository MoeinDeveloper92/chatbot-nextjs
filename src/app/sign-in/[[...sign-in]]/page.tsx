import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";

export const metata: Metadata = {
  title: "FlowBrain - SingIn",
};

export default function SignInPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <SignIn appearance={{ variables: { colorPrimary: "#0F172A" } }} />
    </div>
  );
}
