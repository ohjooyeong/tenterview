'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { CodeXml, Menu } from 'lucide-react';
import Link from 'next/link';

import React from 'react';

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium
            transition-colors focus-visible:outline-none focus-visible:ring-ring
            disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground
            h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent
            focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          variant={'ghost'}
        >
          <Menu className="h-8 w-8" />
          <span className="sr-only">토글 메뉴</span>
        </Button>
      </SheetTrigger>
      <SheetContent side={'left'} className="w-2/4">
        <Link href={'/'} className="flex items-center">
          <CodeXml className="mr-2 h-4 w-4" />
          <span className="font-bold text-lg">Tenterview</span>
        </Link>
        <div className="flex flex-col space-y-2 mt-4">
          <Link
            href={'/problem-bank'}
            className="inline-flex items-center whitespace-nowrap rounded-md text-md font-medium
              transition-colors focus-visible:outline-none focus-visible:ring-1
              focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50
              hover:text-accent-foreground h-9 px-4 py-2 hover:bg-transparent hover:underline
              justify-start"
          >
            문제은행
          </Link>
          <Link
            href={'/community'}
            className="inline-flex items-center whitespace-nowrap rounded-md text-md font-medium
              transition-colors focus-visible:outline-none focus-visible:ring-1
              focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50
              hover:text-accent-foreground h-9 px-4 py-2 hover:bg-transparent hover:underline
              justify-start"
          >
            커뮤니티
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
