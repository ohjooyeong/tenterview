'use client';

import { useScrollTop } from '@/hooks/use-scroll-top';
import { cn } from '@/lib/utils';
import Logo from './logo';
import { ModeToggle } from '@/components/mode-toggle';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import MobileMenu from './mobile-menu';

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
              <Link href={'/problem-bank'}>문제은행</Link>
            </Button>
            <Button variant={'ghost'} size={'sm'} asChild>
              <Link href={'/community'}>커뮤니티</Link>
            </Button>
          </nav>
        </div>
        <MobileMenu />

        <div className="md:ml-auto justify-end w-full flex items-center gap-x-2">
          <>
            <Button variant={'ghost'} size={'sm'}>
              로그인
            </Button>

            <Button size={'sm'}>
              <Link href={'#'}>회원가입</Link>
            </Button>
          </>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
