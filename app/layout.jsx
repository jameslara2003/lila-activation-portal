// app/layout.jsx – Required root layout for Next.js 13+ App Router

export const metadata = {
  title: 'Lila AI Activation Portal',
  description: 'Activate the AI assistant Lila for Ms. Claudine\'s class.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-purple-50 text-gray-800 font-sans">{children}</body>
    </html>
  );
}
