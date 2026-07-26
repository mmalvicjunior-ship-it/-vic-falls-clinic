"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const specialties = [
  { name: "Ear Pain Treatment", href: "/treatments#ear-pain", icon: "🦻" },
  { name: "Hearing Loss", href: "/treatments#hearing-loss", icon: "🔊" },
  { name: "Vertigo Treatment", href: "/treatments#vertigo", icon: "🌀" },
  { name: "Tonsil Removal", href: "/treatments#tonsils", icon: "👄" },
  { name: "Allergy & Rhinitis", href: "/treatments#allergy", icon: "🤧" },
  { name: "Sinus & Polyps", href: "/treatments#sinus", icon: "👃" },
  { name: "Snoring & Sleep Apnea", href: "/treatments#snoring", icon: "😴" },
  { name: "Facial Nerve Disorders", href: "/treatments#facial-nerve", icon: "😊" },
  { name: "Ear Drum Repair", href: "/treatments#ear-drum", icon: "👂" },
  { name: "Nasal Septum Surgery", href: "/surgeries#septoplasty", icon: "🔬" },
  { name: "Throat Infections", href: "/treatments#throat", icon: "🗣️" },
  { name: "Head & Neck Tumors", href: "/treatments#tumors", icon: "🎗️" },
];

const quickLinks = [
  { name: "Find a Doctor", href: "/doctors", icon: "👨‍⚕️" },
  { name: "Patient Portal", href: "/portal", icon: "🏥" },
  { name: "Health Blog", href: "/blog", icon: "📝" },
  { name: "Insurance", href: "/insurance", icon: "🛡️" },
];

const userMenuItems = [
  { name: "My Profile", href: "/profile", icon: "👤" },
  { name: "Appointments", href: "/appointments", icon: "📅" },
  { name: "Medical Records", href: "/records", icon: "📋" },
  { name: "Messages", href: "/messages", icon: "💬", badge: 3 },
  { name: "Settings", href: "/settings", icon: "⚙️" },
];

const navItems = [
  { name: "Home", href: "/" },
  { name: "Treatments", href: "/treatments" },
  { name: "Surgeries", href: "/surgeries" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);

  const pathname = usePathname();
  const searchRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(!searchOpen);
      }
      if (e.key === "Escape") {
        setSearchOpen(false);
        setIsUserMenuOpen(false);
        setShowNotifications(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [searchOpen]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const searchResults = searchQuery.length > 0
    ? [...specialties, ...quickLinks].filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const notifications = [
    { id: 1, title: "Appointment Reminder", message: "Your checkup is tomorrow at 10:00 AM", time: "2 hours ago", read: false },
    { id: 2, title: "Test Results", message: "Your lab results are now available", time: "5 hours ago", read: false },
    { id: 3, title: "Prescription Ready", message: "Your prescription is ready for pickup", time: "1 day ago", read: false },
    { id: 4, title: "Health Tip", message: "Stay hydrated and get enough sleep", time: "2 days ago", read: true },
    { id: 5, title: "Appointment Confirmed", message: "Your appointment with Dr. Smith is confirmed", time: "3 days ago", read: true },
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  const isActive = (href: string) => {
    if (href === "/") return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? "shadow-xl" : "shadow-lg"
    } ${isDarkMode ? "dark" : ""}`}>

      {/* Top Bar */}
      <div className={`${isDarkMode ? "bg-gray-900" : "bg-navy-dark"} text-white text-sm transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between py-2 gap-2">
          <div className="flex flex-wrap items-center gap-4">
            <a href="tel:+1234567890" className="flex items-center gap-1 hover:text-emerald-400 transition">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +263 (0) 83 284 4556
            </a>
            <a href="mailto:info@vicfallsclinic.co.zw" className="flex items-center gap-1 hover:text-emerald-400 transition">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@vicfallsclinic.co.zw
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className="text-gray-300 hover:text-white transition p-1 rounded-lg hover:bg-white/10"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            <div className="text-gray-300 flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              123 Livingstone Way, Victoria Falls
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`${isDarkMode ? "bg-gray-800" : "bg-navy"} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div className="text-white">
              <span className="text-xl font-bold leading-tight block group-hover:text-emerald-400 transition">Vic Falls</span>
              <span className="text-xs text-emerald-400">Clinic</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Search */}
            <div ref={searchRef} className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="px-3 py-2 text-white hover:text-emerald-400 transition flex items-center gap-1"
                aria-label="Search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="text-xs bg-white/10 px-2 py-0.5 rounded">⌘K</span>
              </button>

              {searchOpen && (
                <div className="absolute right-0 top-full mt-2 w-96 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border dark:border-gray-700 overflow-hidden">
                  <div className="p-3">
                    <input
                      type="text"
                      placeholder="Search treatments, doctors, articles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-2 border dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
                      autoFocus
                    />
                  </div>
                  {searchQuery.length > 0 && (
                    <div className="max-h-64 overflow-y-auto border-t dark:border-gray-700">
                      {searchResults.length > 0 ? (
                        searchResults.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                            onClick={() => setSearchOpen(false)}
                          >
                            <span className="text-xl">{item.icon || "🔍"}</span>
                            <span className="text-gray-700 dark:text-gray-200">{item.name}</span>
                          </Link>
                        ))
                      ) : (
                        <div className="px-4 py-3 text-gray-500 dark:text-gray-400 text-sm">
                          No results found
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 font-medium transition relative ${
                  isActive(item.href)
                    ? "text-emerald-400"
                    : "text-white hover:text-emerald-400"
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-emerald-400 rounded-full" />
                )}
              </Link>
            ))}

            {/* Specialties Mega Menu */}
            <div className="mega-trigger relative group">
              <button className={`px-3 py-2 font-medium transition flex items-center gap-1 ${
                isActive("/treatments") ? "text-emerald-400" : "text-white hover:text-emerald-400"
              }`}>
                Specialties
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="mega-menu absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl border dark:border-gray-700 p-6 w-[700px]">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-navy dark:text-white font-bold text-sm uppercase tracking-wider">ENT Sub-Specialties</h3>
                      <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">Comprehensive ear, nose, and throat care</p>
                    </div>
                    <Link href="/treatments" className="text-emerald-500 hover:text-emerald-600 text-sm font-medium">
                      View All →
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {specialties.map((s) => (
                      <Link
                        key={s.name}
                        href={s.href}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-ice-light dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition text-sm group/item"
                      >
                        <span className="text-xl">{s.icon}</span>
                        <span>{s.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 text-white hover:text-emerald-400 font-medium transition flex items-center gap-1">
                Resources
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl border dark:border-gray-700 p-3 w-48">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 hover:text-emerald-600 transition text-sm"
                    >
                      <span>{link.icon}</span>
                      <span>{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Notifications */}
            <div ref={notificationRef} className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 text-white hover:bg-white/10 rounded-full transition"
                aria-label="Notifications"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
                    {unreadCount}
                  </span>
                )}
              </button>

              {showNotifications && (
                <div className="absolute right-0 top-full mt-2 w-96 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border dark:border-gray-700 overflow-hidden">
                  <div className="p-4 border-b dark:border-gray-700 flex justify-between items-center">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Notifications</h3>
                    <button className="text-sm text-emerald-500 hover:text-emerald-600 transition">
                      Mark all read
                    </button>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map((notif) => (
                      <div
                        key={notif.id}
                        className={`px-4 py-3 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition cursor-pointer ${
                          !notif.read ? "bg-emerald-50 dark:bg-gray-700/50" : ""
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                            {notif.title}
                          </h4>
                          <span className="text-xs text-gray-500 dark:text-gray-400">{notif.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{notif.message}</p>
                        {!notif.read && (
                          <span className="inline-block mt-1 w-2 h-2 bg-emerald-500 rounded-full"></span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* User Menu */}
            <div ref={userMenuRef} className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center gap-2 text-white hover:bg-white/10 rounded-full p-1 transition"
                aria-label="User menu"
              >
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">JD</span>
                </div>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isUserMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border dark:border-gray-700 overflow-hidden">
                  <div className="px-4 py-3 border-b dark:border-gray-700">
                    <p className="font-semibold text-gray-900 dark:text-white">John Doe</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">john.doe@email.com</p>
                  </div>
                  <div className="py-2">
                    {userMenuItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <div className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
                          <span>{item.icon}</span>
                          <span>{item.name}</span>
                        </div>
                        {item.badge && (
                          <span className="bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                  <div className="border-t dark:border-gray-700 px-4 py-3">
                    <button
                      onClick={() => setIsLoggedIn(!isLoggedIn)}
                      className="w-full text-left text-red-500 hover:text-red-600 text-sm font-medium"
                    >
                      {isLoggedIn ? "Sign Out" : "Sign In"}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Link href="/book-appointment" className="hidden sm:inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition shadow-lg shadow-emerald-500/25 hover:scale-105 transform">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Appointment
            </Link>

            {/* Mobile Toggle */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition">
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className={`lg:hidden ${isDarkMode ? "bg-gray-900" : "bg-navy-dark"} border-t ${isDarkMode ? "border-gray-700" : "border-navy-light"} px-4 pb-4`}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-3 border-b ${isDarkMode ? "border-gray-700" : "border-navy-light"} transition ${
                  isActive(item.href) ? "text-emerald-400" : "text-white hover:text-emerald-400"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <details className="block py-3 border-b border-navy-light">
              <summary className="text-white hover:text-emerald-400 font-medium cursor-pointer">Specialties</summary>
              <div className="mt-2 pl-4 space-y-2">
                {specialties.map((s) => (
                  <Link
                    key={s.name}
                    href={s.href}
                    className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 text-sm py-1 transition"
                    onClick={() => setMobileOpen(false)}
                  >
                    <span>{s.icon}</span>
                    <span>{s.name}</span>
                  </Link>
                ))}
              </div>
            </details>

            {quickLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-3 text-white hover:text-emerald-400 border-b border-navy-light transition"
                onClick={() => setMobileOpen(false)}
              >
                {link.icon} {link.name}
              </Link>
            ))}

            <Link href="/book-appointment" className="block mt-3 text-center bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-full font-semibold transition" onClick={() => setMobileOpen(false)}>
              Book Appointment
            </Link>
          </div>
        )}
      </nav>

      {/* Keyboard shortcut hint */}
      <div className="hidden lg:block fixed bottom-4 right-4 bg-gray-900/90 text-white text-xs px-3 py-2 rounded-lg backdrop-blur-sm z-50">
        Press <kbd className="px-1.5 py-0.5 bg-gray-700 rounded">⌘</kbd> + <kbd className="px-1.5 py-0.5 bg-gray-700 rounded">K</kbd> to search
      </div>
    </header>
  );
}
