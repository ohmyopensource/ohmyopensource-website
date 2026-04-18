import { useState, useEffect, useCallback } from 'react';

export function useNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);
  const toggleMobileMenu = useCallback(
    () => setIsMobileMenuOpen((prev) => !prev),
    [],
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleKey = (e: KeyboardEvent) =>
      e.key === 'Escape' && closeMobileMenu();
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isMobileMenuOpen, closeMobileMenu]);

  return { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu, isScrolled };
}
