import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription
} from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Textarea } from "@/app/components/ui/textarea";
import { Zap } from "lucide-react";

export default function TextPrompt() {
    return (
        <Card id="text-prompt" className="border-none bg-blue-100 px-2 py-6 shadow-none">
            <CardHeader className="space-y-1 pb-4">
                <span className="text-[0.6875rem] font-bold uppercase tracking-[0.05em] text-muted-foreground">
                    Text Synthesis
                </span>
                <CardTitle className="font-headline text-4xl font-extrabold tracking-tighter">
                    Define by Atmosphere
                </CardTitle>
                <CardDescription className="text-sm">
                    Describe the feeling. "Industrial yet airy", "Nordic winter sunset", or "Precision Swiss typography"
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <label className="text-[0.6875rem] font-bold uppercase tracking-[0.05em] text-muted-foreground">
                        PROMPT
                    </label>
                    <Textarea
                        className="min-h-[120px] resize-none border-none bg-background p-6 shadow-sm placeholder:text-muted-foreground/40 focus-visible:ring-2 focus-visible:ring-primary/20"
                        placeholder="A premium dark interface for a luxury watch marketplace. High contrast, deep blacks, and gold accents with elegant serif headers."
                    />
                </div>

                <Button variant="default" size="lg" className="group w-full gap-2">
                    <span>Generate Design System</span>
                    <Zap className="size-4 transition-transform group-hover:translate-x-1" />
                </Button>
            </CardContent>
        </Card>
    )
}