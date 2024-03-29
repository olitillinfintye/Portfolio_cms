import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import { cookies } from 'next/headers';
import classNames from 'classnames';
import ThemeProvider from '@client/context/ThemeContext';
import './globals.css';
import Navbar from '@client/components/Sections/Navbar';
import ConfirmationProvider from '@client/context/TransitionContext';

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const theme = cookieStore.get('theme');

  return (
    <html lang="en" className={`${theme?.value ?? 'system'}`}>
      <body
        
        className={classNames(
          // inter.className,
          ` bg-light-lightest dark:bg-dark-darkest text-dark dark:text-light scroll-smooth`
        )}
      >
        <ThemeProvider>
          <ConfirmationProvider>
            <Navbar />
            {children}
          </ConfirmationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
