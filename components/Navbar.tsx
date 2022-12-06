import { useState } from 'react';
import Link from 'next/link';

const navItems = [
  ['Home', '/'],
  ['Posts', '/posts'],
  ['Experience', '/experience'],
  ['Projects', '/projects'],
  ['About', '/about'],
];
export default function Navbar() {
  return (
    <div className="flex sm:justify-center space-x-4">
      {navItems.map(([title, url]) => (
        <Link
          key="title"
          href={url}
          className="rounded-lg px-3 py-2 text-slate-800 font-medium hover:bg-slate-100 hover:text-slate-900"
        >
          {title}
        </Link>
      ))}
    </div>
  );
}
