import './globals.css';
import type { Metadata } from 'next';
import Navbar from './components/Navbar';

export const metadata: Metadata = {
title: 'Happy Learning Studio',
description:
'Printable learning resources for kids including coloring books, worksheets, brain games, and educational activities.',
};

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return ( <html lang="en"> <body className="bg-white text-gray-900"> <Navbar />
{children} </body> </html>
);
}
