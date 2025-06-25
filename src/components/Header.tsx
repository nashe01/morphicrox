
import React, { useState } from "react";
import { Menu, User, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
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

/* ─────────────────────────  Component  ───────────────────────── */
const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, profile, signOut } = useAuth();
  const navigate = useNavigate();

  const handleAdminAccess = () => {
    console.log('Admin access clicked', { user, profile });
    if (user && profile && (profile.role === 'admin' || profile.role === 'editor')) {
      navigate("/admin");
    } else {
      console.error('Access denied - insufficient permissions', { role: profile?.role });
    }
  };

  return (
    <motion.header
      initial="hidden"
      animate="show"
      variants={headerVariants}
      className="sticky top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-6">
          {/* Logo */}
          <motion.img
            variants={groupVariants}
            src="/lovable-uploads/9aeca46e-6ec2-4e7f-a3fa-94e925134823.png"
            alt="MorphicRox Logo"
            className="h-12 w-auto cursor-pointer"
            onClick={() => navigate("/")}
          />

          {/* Nav + Auth (right side, nudged left with mr-6) */}
          <div className="hidden md:flex items-center ml-auto mr-6 space-x-6">
            {/* Desktop Navigation */}
            <motion.nav
              variants={navGroupVariants}
              className="flex items-center space-x-8"
            >
              <motion.a
                variants={navItemVariants}
                href="/"
                className="text-brand font-medium px-3 py-2 hover:underline underline-offset-8"
              >
                HOME
              </motion.a>

              <motion.a
                variants={navItemVariants}
                href="/products"
                className="text-brand font-medium px-3 py-2 hover:underline underline-offset-8"
              >
                PRODUCTS
              </motion.a>

              {["ABOUT", "CONTACT"].map((label) => (
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

            {/* Desktop User/Auth Controls */}
            <motion.div
              variants={groupVariants}
              className="flex items-center space-x-4"
            >
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger className="p-2 hover:bg-gray-100 rounded-full">
                    <User className="w-5 h-5" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem
                      onClick={handleAdminAccess}
                      className="cursor-pointer"
                    >
                      {profile?.role === "admin" || profile?.role === "editor"
                        ? "Admin Panel"
                        : "Profile"}
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={signOut}
                      className="cursor-pointer"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <button
                  onClick={() => navigate("/auth")}
                  className="px-4 py-2 bg-brand text-white rounded-full hover:bg-brand/90"
                >
                  Sign In
                </button>
              )}
            </motion.div>
          </div>

          {/* Mobile toggle */}
          <motion.button
            variants={groupVariants}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-full"
            aria-label="Toggle mobile menu"
          >
            <Menu className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Mobile nav panel */}
        {mobileOpen && (
          <motion.nav
            initial="hidden"
            animate="show"
            variants={mobileNavVariants}
            className="md:hidden mt-4 space-y-2"
          >
            <motion.a
              variants={navItemVariants}
              href="/"
              className="block text-brand font-medium"
            >
              HOME
            </motion.a>
            <motion.a
              variants={navItemVariants}
              href="/products"
              className="block text-brand font-medium"
            >
              PRODUCTS
            </motion.a>
            <motion.a
              variants={navItemVariants}
              href="/laminate"
              className="block text-brand font-medium"
            >
              LAMINATE
            </motion.a>
            <motion.a
              variants={navItemVariants}
              href="/about"
              className="block text-brand font-medium"
            >
              ABOUT
            </motion.a>
            <motion.a
              variants={navItemVariants}
              href="/contact"
              className="block text-brand font-medium"
            >
              CONTACT
            </motion.a>
            {user ? (
              <>
                <motion.button
                  variants={navItemVariants}
                  onClick={handleAdminAccess}
                  className="block text-brand font-medium text-left w-full"
                >
                  {profile?.role === "admin" || profile?.role === "editor"
                    ? "ADMIN PANEL"
                    : "PROFILE"}
                </motion.button>
                <motion.button
                  variants={navItemVariants}
                  onClick={signOut}
                  className="block text-brand font-medium text-left w-full"
                >
                  SIGN OUT
                </motion.button>
              </>
            ) : (
              <motion.a
                variants={navItemVariants}
                href="/auth"
                className="block text-brand font-medium"
              >
                SIGN IN
              </a>
            )}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
