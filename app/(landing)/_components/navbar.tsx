'use client';

import { useScrollTop } from '@/hooks/use-scroll-top';
import { cn } from '@/lib/utils';
import Logo from './logo';
import { ModeToggle } from '@/components/mode-toggle';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const scrolled = useScrollTop();

  return (
    <header
      className={cn(
        'sticky z-50 bg-background dark:bg-[#1f1f1f] top-0 flex items-center w-full',
        scrolled && 'border-b shadow-sm',
      )}
    >
      <div className="container flex max-w-screen-2xl items-center p-6 pr-8 pl-8">
        <div className="mr-4 hidden md:flex">
          <Logo />

          <nav className="flex items-center gap-4 text-sm lg:gap-6">
            <Button variant={'ghost'} size={'sm'} asChild>
              <Link href={'#'}>문제은행</Link>
            </Button>
            <Button variant={'ghost'} size={'sm'} asChild>
              <Link href={'#'}>커뮤니티</Link>
            </Button>
          </nav>
        </div>
        <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
