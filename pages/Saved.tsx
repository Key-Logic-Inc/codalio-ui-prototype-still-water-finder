import React from "react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../components/ui/alert-dialog";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu";
import { Input } from "../components/ui/input";
import { Progress } from "../components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "../components/ui/toggle-group";

import { Bookmark, Building2, Clock, Grid2X2, List, Map, MapPin, MoreHorizontal, Search, Trash2, Waves } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Saved() {
    const navigate=useNavigate();
    const [query,setQuery]=useState("");
    const [view,setView]=useState("grid");
    window.sessionStorage.setItem("savedQuery",query);
    window.sessionStorage.setItem("savedView",view);
    const [sites,setSites]=useState([{id:1,name:"North Basin",region:"Lake Union",score:92,distance:"420 m"},{id:2,name:"Union Cove",region:"Seattle, WA",score:88,distance:"460 m"},{id:3,name:"East Lagoon",region:"Portage Bay",score:81,distance:"780 m"},{id:4,name:"Canal Reach",region:"Fremont",score:74,distance:"1.2 km"}]);
    const remove=(id:number)=>setSites(items=>items.filter(x=>x.id!==id));
  return (
   <div className="w-full min-w-0 bg-background text-foreground overflow-x-hidden">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-6 p-4 md:p-6 min-w-0">
          <section className="space-y-5"><div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div><Badge variant="secondary" className="mb-3">6 saved</Badge><h1 className="flex items-center gap-3 text-3xl font-semibold tracking-tight"><Bookmark className="size-7 text-primary"/>Saved locations</h1><p className="mt-2 text-muted-foreground">Return to priority study sites and shared map sessions.</p></div><Button onClick={()=>navigate("/")}><Map className="mr-2 size-4"/>Open map</Button></div><div className="flex flex-col gap-3 rounded-xl border bg-card p-4 sm:flex-row"><div className="relative flex-1"><Search className="absolute left-3 top-3 size-4 text-muted-foreground"/><Input className="pl-9" placeholder="Search saved locations" value={query} onChange={(e)=>setQuery(e.target.value)}/></div><Select defaultValue="recent"><SelectTrigger className="sm:w-48"><SelectValue/></SelectTrigger><SelectContent><SelectItem value="recent">Recently saved</SelectItem><SelectItem value="stillness">Highest stillness</SelectItem><SelectItem value="name">Name</SelectItem></SelectContent></Select><ToggleGroup type="single" value={view} onValueChange={(v)=>v&&setView(v)}><ToggleGroupItem value="grid"><Grid2X2 className="size-4"/></ToggleGroupItem><ToggleGroupItem value="list"><List className="size-4"/></ToggleGroupItem></ToggleGroup></div></section>
  <section className="space-y-4"><h2 className="text-lg font-semibold">Priority sites</h2><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{sites.map(site=><Card key={site.id} className="group transition-shadow hover:shadow-md"><div className="relative h-32 overflow-hidden rounded-t-xl bg-gradient-to-br from-secondary to-accent"><div className="absolute left-8 top-8 h-16 w-32 rounded-[50%] border-2 border-primary bg-primary/20"/><MapPin className="absolute left-1/2 top-1/2 size-7 -translate-x-1/2 -translate-y-1/2 text-primary"/></div><CardHeader><div className="flex items-start justify-between"><div><CardTitle>{site.name}</CardTitle><p className="mt-1 text-sm text-muted-foreground">{site.region}</p></div><DropdownMenu><DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreHorizontal className="size-4"/></Button></DropdownMenuTrigger><DropdownMenuContent><DropdownMenuItem>Run again</DropdownMenuItem><DropdownMenuItem>Share</DropdownMenuItem></DropdownMenuContent></DropdownMenu></div></CardHeader><CardContent className="space-y-3"><div className="flex justify-between text-sm"><span className="flex gap-2 text-muted-foreground"><Waves className="size-4"/>Stillness</span><b>{site.score}%</b></div><Progress value={site.score}/><div className="flex justify-between text-sm"><span className="flex gap-2 text-muted-foreground"><Building2 className="size-4"/>Nearest building</span><span>{site.distance}</span></div><Badge variant="secondary"><Clock className="mr-1 size-3"/>Analyzed 2 days ago</Badge></CardContent><CardFooter className="gap-2"><Button className="flex-1">Open on map</Button><AlertDialog><AlertDialogTrigger asChild><Button variant="outline" size="icon"><Trash2 className="size-4"/></Button></AlertDialogTrigger><AlertDialogContent><AlertDialogHeader><AlertDialogTitle>Remove saved location?</AlertDialogTitle><AlertDialogDescription>This removes {site.name} from your priority sites.</AlertDialogDescription></AlertDialogHeader><AlertDialogFooter><AlertDialogCancel>Cancel</AlertDialogCancel><AlertDialogAction onClick={()=>remove(site.id)}>Remove</AlertDialogAction></AlertDialogFooter></AlertDialogContent></AlertDialog></CardFooter></Card>)}</div>{sites.length===0&&<div className="rounded-xl border border-dashed p-12 text-center"><h3 className="font-semibold">No saved locations yet</h3><p className="text-muted-foreground">Save promising sites from the map or analysis results.</p></div>}</section>
      </div>
    </div>
  );
}