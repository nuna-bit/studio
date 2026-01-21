'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { FolderKanban, GraduationCap, Mail, User, Briefcase, QrCode } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Projects', icon: FolderKanban },
  { href: '/about', label: 'About', icon: User },
  { href: '/experience', label: 'Experience', icon: Briefcase },
  { href: '/education', label: 'Education', icon: GraduationCap },
  { href: '/cv', label: 'CV', icon: QrCode },
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
