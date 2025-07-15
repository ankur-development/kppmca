"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, Home, LogOut } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import React from "react";

export const Topbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Function to get page title from pathname
  const getPageTitle = () => {
    const segments = pathname.split('/').filter(Boolean);
    
    if (segments.length === 0) return "Dashboard";
    
    // Convert last segment to title case
    const lastSegment = segments[segments.length - 1];
    return lastSegment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const handleBack = () => {
    router.back();
  };

  const handleDashboard = () => {
    router.push('/admin/dashboard');
  };

  const handleLogout = () => {
    // Clear localStorage
    localStorage.clear();
    
    // You can also clear specific items if needed:
    // localStorage.removeItem('token');
    // localStorage.removeItem('user');
    
    // Clear sessionStorage as well (optional)
    sessionStorage.clear();
    
    // Redirect to home page
    router.push('/admin');
  };

  // Check current route conditions
  const isAdminRoute = pathname === '/admin';
  const isAdminDashboardRoute = pathname === '/admin/dashboard';
  const shouldShowBackAndDashboard = !isAdminRoute && !isAdminDashboardRoute;
  const shouldShowLogout = !isAdminRoute;

  return (
    <header className="h-16 border-b shadow-xl flex items-center justify-between p-2">
      <div className="flex items-center gap-2">
        {shouldShowBackAndDashboard && (
          <>
            <Button variant="outline" onClick={handleBack}>
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back
            </Button>

            <Button variant="outline" onClick={handleDashboard}>
              <Home className="w-4 h-4 mr-1" />
              Dashboard
            </Button>
          </>
        )}
      </div>

      <h2 className="text-xl font-semibold">{getPageTitle()}</h2>
      
      <div className="flex items-center">
        {shouldShowLogout && (
          <Button onClick={handleLogout} variant="destructive">
            <LogOut className="w-4 h-4 mr-1" />
            Logout
          </Button>
        )}
      </div>
    </header>
  );
};