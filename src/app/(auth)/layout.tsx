import { ClerkProvider } from "@clerk/nextjs"

import '../globals.css'

export const metadata = {
  title: 'Zee',
  description: 'Authentication',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <ClerkProvider
        appearance={{
          layout: {
        socialButtonsVariant: "iconButton",
        logoImageUrl: "/icons/yoom-logo.svg",
          },
          variables: {
        colorText: "#fff",
        colorPrimary: "#0E78F9",
        colorBackground: "#1C1F2E",
        colorInputBackground: "#252A41",
        colorInputText: "#fff",
          },
        }}
      >
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#1C1F2E] to-[#252A41] p-32">
          {children}
        </div>
      </ClerkProvider>
      </body>
    </html>
  )
}
