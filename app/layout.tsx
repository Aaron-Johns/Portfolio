import type {Metadata} from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'Aaron Johns | Engineering Portfolio',
  description: 'Professional Portfolio and Engineering Showcase of Aaron Johns, specialized in AI, Data Science, and Robotics.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50 antialiased selection:bg-emerald-500/30" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
