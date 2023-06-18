import './globals.css';
import { NavBar } from '@/components/NavBar';
import {Providers} from "@/components/Providers";
import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import {cn} from "@/utils";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }: {
	children: React.ReactNode;
}) {
	return (
			<html lang='en'>
				<body className={cn('font-sans min-h-[100vh] dark:bg-slate-700', inter.className)}>
					<Providers>
						<ClerkProvider>
							<NavBar />
							{children}
						</ClerkProvider>
					</Providers>
				</body>
			</html>
	);
}
