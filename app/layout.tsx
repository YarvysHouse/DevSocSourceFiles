import './globals.css';
import LayoutShell from '@/components/layout-shell/layout-shell';

export const metadata = {
  title: 'Stellenbosch CS/RW',
  description: 'Stellenbosch Computer Science Rekenaarwetenskap',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}