import './assets/styles/styles.scss';

export const metadata = {
  title: 'Home',
  description: 'jcamilomnavia',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
