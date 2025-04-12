'use client';

import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import { AuthDialog } from './auth-dialog';
import { CartSheet } from './cart-sheet';

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link href="/" className="text-2xl font-bold">
          LuxeCart
        </Link>
        
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
          <CartSheet />
          <AuthDialog />
        </div>
      </div>
    </nav>
  );
}