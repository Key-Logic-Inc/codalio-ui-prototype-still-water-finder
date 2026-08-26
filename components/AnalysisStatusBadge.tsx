import { Badge } from "./ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";


import { Circle, LoaderCircle, CircleCheck, TriangleAlert } from "lucide-react";

        export default function AnalysisStatusBadge({ state = "idle" }: { state?: "idle" | "processing" | "complete" | "failed" }) {
  const labels = { idle: "Ready", processing: "Processing", complete: "Complete", failed: "Needs attention" };
  const icons = { idle: <Circle className="size-3" />, processing: <LoaderCircle className="size-3 animate-spin" />, complete: <CircleCheck className="size-3" />, failed: <TriangleAlert className="size-3" /> };
  const styles = { idle: "gap-1.5", processing: "gap-1.5 bg-accent text-accent-foreground", complete: "gap-1.5 bg-primary/10 text-primary", failed: "gap-1.5 bg-destructive/10 text-destructive" };
        return (
            <TooltipProvider><Tooltip><TooltipTrigger asChild><Badge variant="secondary" className={styles[state]}>{icons[state]}{labels[state]}</Badge></TooltipTrigger><TooltipContent>Current analysis status</TooltipContent></Tooltip></TooltipProvider>
        );
        }