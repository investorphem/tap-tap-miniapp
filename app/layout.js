// app/layout.js
export const metadata = {
  title: 'Tap Tap Miniapp',
  description: 'Tap quickly, earn points, and challenge friends on Farcaster!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
