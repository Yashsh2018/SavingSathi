'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../../components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../../../components/ui/sheet';
import { Moon, Sun, Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import logo from "../../../assets/logo.png";
import { usePathname } from 'next/navigation';

const mainNavItems = [
  {
    title: 'Home',
    href: '#home',
  },
  {
    title: 'How it Works',
    href: '#how-it-works',
  },
  {
    title: 'Benefits',
    href: '#benefits',
  },
  {
    title: 'Save & Earn',
    href: '#save-earn',
  },
  {
    title: 'Features',
    href: '#features',
  },
  {
    title: 'Screenshots',
    href: '#screenshots',
  },
  // {
  //   title: 'Team',
  //   href: '#team',
  // },
  {
    title: 'Contact',
    href: '#contact',
  },
];

const mainNavItems2 = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Blogs',
    href: '/blogs',
  },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [hoveredItem, setHoveredItem] = React.useState<string | null>(null);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const isHomePage = pathname === '/';

  // Filter mainNavItems2 to remove Home when on homepage
  const filteredNavItems2 = isHomePage 
    ? mainNavItems2.filter(item => item.title !== 'Home')
    : mainNavItems2;

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    if (typeof window !== 'undefined') {
      handleScroll();
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const handleNavClick = (href: string, event: React.MouseEvent) => {
    if (href.startsWith('#')) {
      event.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 80; // Adjust for header height

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }

      // Close mobile menu if open
      setIsOpen(false);
    }
  };

  return (
    <motion.header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border/60 shadow-sm bg-black'
          : 'bg-transparent border-b border-transparent'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="flex justify-center items-center">
        <div className="container flex h-18 items-center justify-between">

          {/* Logo with animation */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/"
              className="flex items-center space-x-2 group"
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              <motion.div
                whileHover={{ rotate: 5 }}
              >
                <Image
                  src={logo}
                  alt="Hero background"
                  className="h-20 w-15 text-white object-contain"
                />
              </motion.div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {isHomePage && (
              <>
                {mainNavItems.map((item) => (
                  <div key={item.title} className="relative uppercase">
                    <motion.div
                      className="relative"
                      whileHover={{ y: -2 }}
                      onHoverStart={() => setHoveredItem(item.title)}
                      onHoverEnd={() => setHoveredItem(null)}
                    >
                      <Link
                        href={item.href}
                        onClick={(e) => handleNavClick(item.href, e)}
                        className={cn(
                          'px-4 py-2 text-sm font-medium text-semibold transition-all duration-300 relative block uppercase cursor-pointer',
                          'text-foreground/80 hover:text-foreground'
                        )}
                      >
                        {item.title}
                        <AnimatePresence>
                          {hoveredItem === item.title && (
                            <motion.div
                              className="absolute inset-0 bg-gray-200/50 dark:bg-gray-700/30 rounded-lg -z-10"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              transition={{ duration: 0.2 }}
                              layoutId="navHover"
                            />
                          )}
                        </AnimatePresence>
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </>
            )}

            {/* Use filteredNavItems2 instead of mainNavItems2 */}
            {filteredNavItems2.map((item) => (
              <div key={item.title} className="relative uppercase">
                <motion.div
                  className="relative"
                  whileHover={{ y: -2 }}
                  onHoverStart={() => setHoveredItem(item.title)}
                  onHoverEnd={() => setHoveredItem(null)}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(item.href, e)}
                    className={cn(
                      'px-4 py-2 text-sm font-medium text-semibold transition-all duration-300 relative block uppercase cursor-pointer',
                      'text-foreground/80 hover:text-foreground'
                    )}
                  >
                    {item.title}
                    <AnimatePresence>
                      {hoveredItem === item.title && (
                        <motion.div
                          className="absolute inset-0 bg-gray-200/50 dark:bg-gray-700/30 rounded-lg -z-10"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.2 }}
                          layoutId="navHover"
                        />
                      )}
                    </AnimatePresence>
                  </Link>
                </motion.div>
              </div>
            ))}
          </nav>

          {/* Right Section - Theme Toggle and Auth */}
          <div className="flex items-center space-x-3">

            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <motion.button
                  className="p-2 rounded-lg bg-background/80 backdrop-blur-sm border border-border/60 hover:bg-accent md:hidden mx-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] bg-background/95 backdrop-blur-md border-l border-border/60"
              >
                <motion.div
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 300, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full p-3"
                >
                  <div className="flex items-center justify-between mb-8">
                    <Link
                      href="/"
                      className="flex items-center space-x-2"
                      onClick={(e) => {
                        if (window.location.pathname === '/') {
                          e.preventDefault();
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                        setIsOpen(false);
                      }}
                    >
                      <div className="h-10 w-10 flex items-center justify-center">
                        <Image
                          src={logo}
                          alt="icon"
                          className="h-8 w-8 object-contain p-0"
                        />
                      </div>
                      <span className="font-bold text-xl text-foreground">
                        SavingSathi
                      </span>
                    </Link>
                    <Button
                      size="icon"
                      onClick={() => setIsOpen(false)}
                    >
                      <X />
                    </Button>
                  </div>

                  <nav className="flex-1 space-y-4 px-4">
                    {isHomePage && (
                      <>
                        {mainNavItems.map((item, index) => (
                          <motion.div
                            key={item.title}
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Link
                              href={item.href}
                              className="block py-3 text-lg font-semibold transition-all hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer"
                              onClick={(e) => handleNavClick(item.href, e)}
                            >
                              {item.title}
                            </Link>
                          </motion.div>
                        ))}
                      </>
                    )}

                    {/* Use filteredNavItems2 in mobile menu as well */}
                    {filteredNavItems2.map((item, index) => (
                      <motion.div
                        key={item.title}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => setIsOpen(false)}
                      >
                        <Link
                          href={item.href}
                          className="block py-3 text-lg font-semibold transition-all hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer"
                          onClick={(e) => handleNavClick(item.href, e)}
                        >
                          {item.title}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                </motion.div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}