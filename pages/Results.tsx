import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu";
import { Input } from "../components/ui/input";
import { Progress } from "../components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

import { Bookmark, Building2, ChartNoAxesCombined, Download, Gauge, MapPin, MoreHorizontal, Plus, Search, SlidersHorizontal, Timer, Waves } from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Results() {
    const navigate=useNavigate();
    const metrics=[{label:"Water bodies found",value:"12",trend:"+3 this run",Icon:Waves},{label:"High stillness probability",value:"8",trend:"67% of sites",Icon:Gauge,progress:67},{label:"Large buildings nearby",value:"21",trend:"within 2 km",Icon:Building2},{label:"Processing time",value:"18.4 s",trend:"12% faster",Icon:Timer}];
    const [query,setQuery]=useState("");
    const [confidence,setConfidence]=useState("all");
    const rows=[{site:"North Basin",stillness:92,area:"18,400 m²",building:"Harbor Works",distance:"420 m",confidence:"High"},{site:"Union Cove",stillness:88,area:"14,200 m²",building:"Maritime Center",distance:"460 m",confidence:"High"},{site:"Canal Reach",stillness:74,area:"11,860 m²",building:"Warehouse 12",distance:"1.2 km",confidence:"Medium"},{site:"East Lagoon",stillness:81,area:"22,100 m²",building:"Research Annex",distance:"780 m",confidence:"High"}];
    const filtered=useMemo(()=>rows.filter(r=>r.site.toLowerCase().includes(query.toLowerCase())&&(confidence==="all"||r.confidence.toLowerCase()===confidence)),[query,confidence]);
  return (
   <div className="w-full min-w-0 bg-background text-foreground overflow-x-hidden">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-6 p-4 md:p-6 min-w-0">
          <section className="space-y-5"><div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div><Badge variant="secondary" className="mb-3">Completed · AN-2048</Badge><h1 className="flex items-center gap-3 text-3xl font-semibold tracking-tight"><ChartNoAxesCombined className="size-7 text-primary"/>Analysis results</h1><p className="mt-2 text-muted-foreground">Review detected water bodies, confidence scores, and nearby building relationships.</p></div><div className="flex gap-2"><Button variant="outline"><Download className="mr-2 size-4"/>Export CSV</Button><Button onClick={()=>navigate("/")}><Plus className="mr-2 size-4"/>New analysis</Button></div></div><div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{metrics.map(({label,value,trend,Icon,progress})=><Card key={label}><CardHeader className="pb-2"><CardTitle className="flex items-center justify-between text-sm font-medium text-muted-foreground">{label}<Icon className="size-4 text-primary"/></CardTitle></CardHeader><CardContent><div className="text-2xl font-semibold">{value}</div><p className="mt-1 text-xs text-muted-foreground">{trend}</p>{progress&&<Progress value={progress} className="mt-3"/>}</CardContent></Card>)}</div></section>
  <section className="space-y-4"><h2 className="text-lg font-semibold">Detected sites</h2><div className="flex flex-col gap-3 rounded-xl border bg-card p-4 lg:flex-row lg:items-center"><div className="relative flex-1"><Search className="absolute left-3 top-3 size-4 text-muted-foreground"/><Input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search water body or region" className="pl-9"/></div><Select value={confidence} onValueChange={setConfidence}><SelectTrigger className="w-full lg:w-48"><SelectValue/></SelectTrigger><SelectContent><SelectItem value="all">Any confidence</SelectItem><SelectItem value="high">High confidence</SelectItem><SelectItem value="medium">Medium confidence</SelectItem></SelectContent></Select><Button variant="outline"><SlidersHorizontal className="mr-2 size-4"/>Filters <Badge className="ml-2">2</Badge></Button></div><div className="overflow-x-auto rounded-xl border bg-card"><Table><TableHeader><TableRow>{["Site","Stillness","Water area","Nearest building","Distance","Confidence","Status",""] .map(x=><TableHead key={x}>{x}</TableHead>)}</TableRow></TableHeader><TableBody>{filtered.map(row=><TableRow key={row.site}><TableCell className="font-medium">{row.site}</TableCell><TableCell><Badge className="bg-primary/10 text-primary">{row.stillness}%</Badge></TableCell><TableCell>{row.area}</TableCell><TableCell>{row.building}</TableCell><TableCell>{row.distance}</TableCell><TableCell>{row.confidence}</TableCell><TableCell><Badge variant="secondary">Reviewed</Badge></TableCell><TableCell><DropdownMenu><DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreHorizontal className="size-4"/></Button></DropdownMenuTrigger><DropdownMenuContent align="end"><DropdownMenuItem><MapPin className="mr-2 size-4"/>Inspect on map</DropdownMenuItem><DropdownMenuItem><Bookmark className="mr-2 size-4"/>Save location</DropdownMenuItem></DropdownMenuContent></DropdownMenu></TableCell></TableRow>)}</TableBody></Table>{filtered.length===0&&<div className="p-12 text-center text-muted-foreground">No sites match these filters</div>}</div></section>
      </div>
    </div>
  );
}