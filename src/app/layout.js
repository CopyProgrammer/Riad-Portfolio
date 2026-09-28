import './sass/style.scss';
import ClientLayout from './ui/Layout/ClientLayout';

export const metadata = {
  title: 'Md Mujaheed Shahariar Riad — Portfolio',
  description: 'Portfolio of Md Mujaheed Shahariar Riad, BSc (Hons) Computer Science student at London South Bank University. Incoming Data Analyst at MEAMO.',
  authors: [{ name: 'Md Mujaheed Shahariar Riad' }],
  icons: {
    icon: '/images/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
