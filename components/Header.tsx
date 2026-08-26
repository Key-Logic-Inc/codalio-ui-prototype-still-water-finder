
import { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { Menu, Waves, Moon, Sun, Bell, CircleCheck, Map, ChartNoAxesCombined, Bookmark, Settings } from "lucide-react";

        export default function Header() {
  const [dark, setDark] = useState(false);
  const toggleTheme = () => { const next = !dark; setDark(next); document.documentElement.classList.toggle("dark", next); };
  const nav = [{label:"Map View",to:"/",Icon:Map},{label:"Analysis Results",to:"/results",Icon:ChartNoAxesCombined},{label:"Saved Locations",to:"/saved",Icon:Bookmark},{label:"Settings & About",to:"/settings",Icon:Settings}];
        return (
            <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-border bg-background/95 px-4 backdrop-blur md:px-6"><div className="flex items-center gap-3"><Sheet><SheetTrigger asChild><Button variant="ghost" size="icon" className="md:hidden"><Menu className="size-5"/></Button></SheetTrigger><SheetContent side="left" className="p-5"><div className="mb-6 flex items-center gap-2 font-semibold"><Waves className="text-primary"/>Still Water Finder</div><nav className="space-y-2">{nav.map(({label,to,Icon})=><Button key={to} variant="ghost" className="w-full justify-start" asChild><Link to={to}><Icon className="mr-2 size-4"/>{label}</Link></Button>)}</nav></SheetContent></Sheet><span className="font-semibold md:hidden">Still Water Finder</span><Badge variant="secondary" className="hidden gap-1 text-primary lg:inline-flex"><CircleCheck className="size-3"/>Live data connected</Badge></div><TooltipProvider><div className="flex items-center gap-1"><Tooltip><TooltipTrigger asChild><Button variant="ghost" size="icon" onClick={toggleTheme}>{dark ? <Sun className="size-4"/> : <Moon className="size-4"/>}</Button></TooltipTrigger><TooltipContent>Toggle theme</TooltipContent></Tooltip><Button variant="ghost" size="icon"><Bell className="size-4"/></Button><DropdownMenu><DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><Avatar className="size-8"><AvatarFallback>NR</AvatarFallback></Avatar></Button></DropdownMenuTrigger><DropdownMenuContent align="end"><DropdownMenuItem>Researcher profile</DropdownMenuItem><DropdownMenuItem>Workspace</DropdownMenuItem><DropdownMenuItem>Sign out</DropdownMenuItem></DropdownMenuContent></DropdownMenu></div></TooltipProvider></header>
        );
        }