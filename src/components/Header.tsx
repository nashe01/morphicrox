import React, { useState } from "react";
import { Menu, User, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion, cubicBezier } from "framer-motion";

/* ─────────────────────────  Animation Variants ───────────────────────── */
const ease = cubicBezier(0.25, 0.1, 0.25, 1);

const headerVariants = {
  hidden: { opacity: 0, y: -30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const groupVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

const navGroupVariants = {
  hidden: groupVariants.hidden,
  show: {
    ...groupVariants.show,
    transition: {
      ...groupVariants.show.transition,
      staggerChildren: 0.15,
    },
  },
};

const mobileNavVariants = {
  hidden: { opacity: 0, y: -10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.1 },
  },
};

/* ─────────────────────────  Data  ───────────────────────── */
const categories = [
  { label: "Showers", href: "/products/showers", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop" },
  { label: "Bathtub/Shower Combos", href: "/products/bathtub-shower-combos", image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop" },
  { label: "Bathtubs", href: "/products/bathtubs", image: "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?w=400&h=300&fit=crop" },
  { label: "Countertops", href: "/products/countertops", image: "https://images.unsplash.com/photo-1556912167-f556f1bb6da8?w=400&h=300&fit=crop" },
  { label: "Sinks", href: "/products/sinks", image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&h=300&fit=crop" },
];

/* ─────────────────────────  Component  ───────────────────────── */
const Header: React.FC = () => {
  const [previewSrc, setPreviewSrc] = useState(categories[0].image);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, profile, signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <motion.header
      initial="hidden"
      animate="show"
      variants={headerVariants}
      className="sticky top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.img
            variants={groupVariants}
            src="/lovable-uploads/9aeca46e-6ec2-4e7f-a3fa-94e925134823.png"
            alt="MorphicRox Logo"
            className="h-12 w-auto cursor-pointer"
            onClick={() => navigate('/')}
          />

          {/* Desktop Navigation */}
          <motion.nav variants={navGroupVariants} className="hidden md:flex items-center space-x-8">
            <motion.a variants={navItemVariants} href="/" className="text-brand font-medium px-3 py-2 hover:underline underline-offset-8">
              HOME
            </motion.a>

            <motion.div variants={navItemVariants}>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-brand font-medium px-3 py-2 bg-transparent hover:underline underline-offset-8">
                      PRODUCTS
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="flex w-[700px] p-6 bg-white border border-gray-200 rounded-lg shadow-xl">
                        <ul className="w-1/2 space-y-2 text-sm">
                          {categories.map((c) => (
                            <li key={c.href}>
                              <a
                                href={c.href}
                                onMouseEnter={() => setPreviewSrc(c.image)}
                                onFocus={() => setPreviewSrc(c.image)}
                                className="block text-gray-700 hover:text-brand transition-colors"
                              >
                                {c.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                        <div className="ml-auto w-1/2 flex justify-end items-end">
                          <img
                            key={previewSrc}
                            src={previewSrc}
                            alt="Product preview"
                            className="h-32 w-56 object-cover rounded-md shadow"
                          />
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </motion.div>

            {["LAMINATE", "ABOUT", "CONTACT", "GALLERY"].map((label) => (
              <motion.a
                key={label}
                variants={navItemVariants}
                href={`/${label.toLowerCase()}`}
                className="text-brand font-medium px-3 py-2 hover:underline underline-offset-8"
              >
                {label}
              </motion.a>
            ))}
          </motion.nav>

          {/* Mobile toggle */}
          <motion.button
            variants={groupVariants}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-full"
            aria-label="Toggle mobile menu"
          >
            <Menu className="w-6 h-6" />
          </motion.button>

          {/* Desktop user/auth controls */}
          <motion.div variants={groupVariants} className="hidden md:flex items-center space-x-4">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="p-2 hover:bg-gray-100 rounded-full">
                  <User className="w-5 h-5" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => navigate('/admin')} className="cursor-pointer">
                    {profile?.role === 'admin' || profile?.role === 'editor' ? 'Admin Panel' : 'Profile'}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={signOut} className="cursor-pointer">
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <button 
                onClick={() => navigate('/auth')}
                className="px-4 py-2 bg-brand text-white rounded-full hover:bg-brand/90"
              >
                Sign In
              </button>
            )}
          </motion.div>
        </div>

        {/* Mobile nav panel */}
        {mobileOpen && (
          <motion.nav
            initial="hidden"
            animate="show"
            variants={mobileNavVariants}
            className="md:hidden mt-4 space-y-2"
          >
            <motion.a variants={navItemVariants} href="/" className="block text-brand font-medium">HOME</motion.a>
            <motion.details variants={navItemVariants} className="group">
              <summary className="cursor-pointer text-brand font-medium">PRODUCTS</summary>
              <div className="ml-4 mt-2 space-y-1">
                {categories.map((c) => (
                  <a key={c.href} href={c.href} className="block text-sm text-gray-700 hover:text-brand">{c.label}</a>
                ))}
              </div>
            </motion.details>
            <motion.a variants={navItemVariants} href="/laminate" className="block text-brand font-medium">LAMINATE</motion.a>
            <motion.a variants={navItemVariants} href="/about" className="block text-brand font-medium">ABOUT</motion.a>
            <motion.a variants={navItemVariants} href="/contact" className="block text-brand font-medium">CONTACT</motion.a>
            <motion.a variants={navItemVariants} href="/gallery" className="block text-brand font-medium">GALLERY</motion.a>
            {user ? (
              <>
                <motion.a variants={navItemVariants} href="/admin" className="block text-brand font-medium">
                  {profile?.role === 'admin' || profile?.role === 'editor' ? 'ADMIN PANEL' : 'PROFILE'}
                </motion.a>
                <motion.button variants={navItemVariants} onClick={signOut} className="block text-brand font-medium">
                  SIGN OUT
                </motion.button>
              </>
            ) : (
              <motion.a variants={navItemVariants} href="/auth" className="block text-brand font-medium">
                SIGN IN
              </motion.a>
            )}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;

