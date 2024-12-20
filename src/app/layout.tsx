import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Minimal UI Kit',
  description: 'My App is a...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}