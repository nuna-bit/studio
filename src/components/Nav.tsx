'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { LayoutDashboard, GraduationCap, FolderKanban, Mail } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home', icon: LayoutDashboard },
  { href: '/education', label: 'Education', icon: GraduationCap },
  { href: '/projects', label: 'Projects', icon: FolderKanban },
  { href: '/contact', label: 'Contact', icon: Mail },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <SidebarMenu className="p-0">
      {navItems.map((item) => (
        <SidebarMenuItem key={item.label}>
            <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.label}>
              <Link href={item.href}>
                <item.icon />
                <span>{item.label}</span>
              </Link>
            </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
