import { SignIn } from "@clerk/nextjs/app-beta";

export default function Page() {
  return (
    <SignIn
      signUpUrl="/sign-up"
      afterSignInUrl={'/profile'}
      afterSignUpUrl={'/profile'}
      appearance={{
        layout: {
          socialButtonsPlacement: 'bottom',
          socialButtonsVariant: 'iconButton',
        },
        elements: {
          formButtonPrimary: 'bg-slate-500 hover:bg-slate-400 text-sm normal-case',
          footer: 'bg-red-200'
        }
      }}
    />
  );
}
