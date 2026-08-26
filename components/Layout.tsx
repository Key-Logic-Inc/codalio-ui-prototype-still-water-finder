
import { Outlet, Link, useLocation } from "react-router-dom";
import { Waves, Map, ChartNoAxesCombined, Bookmark, Settings } from "lucide-react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "./ui/sidebar";
import Header from "./Header";
import Footer from "./Footer";
        export default function Layout() {
  const { pathname } = useLocation();
  const nav = [{label:"Map View",to:"/",Icon:Map},{label:"Analysis Results",to:"/results",Icon:ChartNoAxesCombined},{label:"Saved Locations",to:"/saved",Icon:Bookmark},{label:"Settings & About",to:"/settings",Icon:Settings}];
        return (
            <SidebarProvider><Sidebar><SidebarHeader className="h-16 justify-center border-b border-sidebar-border px-4"><Link to="/" className="flex items-center gap-2 font-semibold"><span className="grid size-9 place-items-center rounded-lg bg-primary text-primary-foreground"><Waves className="size-5"/></span><span>Still Water Finder</span></Link></SidebarHeader><SidebarContent className="p-2"><SidebarMenu>{nav.map(({label,to,Icon})=><SidebarMenuItem key={to}><SidebarMenuButton asChild isActive={pathname===to}><Link to={to}><Icon/><span>{label}</span></Link></SidebarMenuButton></SidebarMenuItem>)}</SidebarMenu></SidebarContent><SidebarFooter className="border-t border-sidebar-border p-4 text-xs text-sidebar-foreground/70">Northwest Ecology Lab</SidebarFooter></Sidebar><SidebarInset className="min-w-0"><div className="relative"><div className="absolute left-3 top-4 z-50 hidden md:block"><SidebarTrigger/></div><Header/></div><main className="min-w-0 flex-1 overflow-auto"><Outlet/></main><Footer/></SidebarInset></SidebarProvider>
        );
        }