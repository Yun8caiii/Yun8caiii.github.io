import React from 'react';
import Link from 'next/link';

function FooterNav() {
  return (
    <footer className="bg-gray-950 text-white py-4">
      <div className="container mx-auto flex justify-center space-x-4">
      <div className="flex space-x-4">
        <Link href="/">
          <p className="hover:underline">Home</p>
        </Link>
        <Link href="#projects">
          <p className="hover:underline">Projects</p>
        </Link>
        <Link href="https://medium.com/@yun8caiii">
          <p className="hover:underline">Blogs</p>
        </Link>
        <Link href="/contact">
          <p className="hover:underline">Contact</p>
        </Link>
      </div>
      <p className="text-sm text-gray-400">@2025 Yun Cai. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default FooterNav;