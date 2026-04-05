
import { Sidebar, SidebarHeader, SidebarTrigger, SidebarContent, SidebarInset } from "@/components/ui/sidebar";
import Nav from "@/components/Nav";
import { BrainCircuit } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar collapsible="icon">
        <SidebarHeader className="p-2">
            <div className="flex items-center gap-2 w-full">
                <BrainCircuit className="h-8 w-8 text-primary" />
                  <h1 className="text-xl font-semibold font-headline text-primary group-data-[collapsible=icon]:hidden">
                  Maria Jose Portfolio
                </h1>
            </div>
        </SidebarHeader>
        <SidebarContent>
          <Nav />
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
          <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6">
            <div className="flex items-center gap-2">
              <div className="md:hidden">
                <SidebarTrigger />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <ModeToggle />
            </div>
        </header>
        <main className="flex-1 p-4 sm:p-6">{children}</main>
      </SidebarInset>
    </>
  );
}
