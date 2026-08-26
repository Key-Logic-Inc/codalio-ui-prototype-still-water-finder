
import { Link } from "react-router-dom";
import { Waves } from "lucide-react";
import { Button } from "./ui/button";

        export default function Footer() {
        return (
            <footer className="mt-auto border-t border-border bg-card px-6 py-4 text-sm text-muted-foreground"><div className="mx-auto flex w-full max-w-[1600px] flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div className="flex items-center gap-2"><Waves className="size-4 text-primary"/><span>© 2025 Still Water Finder · Clearer geospatial evidence.</span></div><nav className="flex items-center gap-1">{["Methodology","API","Privacy"].map((label)=><Button key={label} variant="link" size="sm" asChild><Link to="/settings">{label}</Link></Button>)}</nav></div></footer>
        );
        }