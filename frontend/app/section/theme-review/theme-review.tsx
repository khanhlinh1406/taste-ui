import {
  Card,
  CardContent
} from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";

import { Brush, Layers, Type, MoreVertical, Activity, CheckCircle2 } from "lucide-react";

export default function ThemeReview() {
  return (
    <div id="theme-review" className="my-6 rounded-xl bg-blue-50 p-6">
      <div className="grid md:grid-cols-3">
        <div className="px-2">
          <span className="mb-4 block text-[0.6875rem] font-bold uppercase tracking-[0.05em] text-gray-500">
            Component Reality
          </span>
          <h2 className="font-headline mb-4 text-4xl font-extrabold tracking-tighter">
            Token Application
          </h2>
          <p className="py-4 text-gray-700">
            See how the generated system adapts across functional patterns.
            Every corner radius, shadow depth, and font weight is mathematically
            derived from your intent.
          </p>

          <ul className="space-y-6">
            <li className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-200 text-sky-700">
                <Brush className="size-5" />
              </div>
              <span className="font-bold">Adaptive Radii</span>
            </li>
            <li className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-300 text-slate-700">
                <Layers className="size-5" />
              </div>
              <span className="font-bold">Elevation Levels</span>
            </li>
            <li className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-fuchsia-300 text-fuchsia-900">
                <Type className="size-5" />
              </div>
              <span className="font-bold">Scale Hierarchies</span>
            </li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <InterfaceCard></InterfaceCard>
            <ProfileDataCard></ProfileDataCard>
          </div>

          <PerformanceMetricsCard></PerformanceMetricsCard>
        </div>
      </div>
    </div>
  );
}

const InterfaceCard = () => {
  return (
    <Card className="border-none p-8 shadow-xl shadow-primary/5 ring-0">
      <div className="mb-6 flex items-start justify-between">
        <div className="h-12 w-12 rounded-lg bg-primary/10"></div>
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <MoreVertical className="size-5" />
        </Button>
      </div>
      <div className="mb-6">
        <h4 className="font-headline mb-2 text-xl font-extrabold">Interface Card</h4>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Demonstrating soft shadows and editorial spacing.
        </p>
      </div>
      <Button className="w-full shadow-lg shadow-primary/20">
        Action Button
      </Button>
    </Card>
  )
}

const ProfileDataCard = () => {
  return (
    <Card className="border-none p-8 shadow-xl shadow-primary/5 ring-0">
      <h4 className="mb-6 text-[0.6875rem] font-bold uppercase tracking-widest text-muted-foreground">
        Profile Data
      </h4>
      <div className="space-y-3">
        <div className="flex h-10 items-center rounded-lg bg-muted/50 px-4 text-xs font-medium text-muted-foreground">
          Full Name
        </div>
        <div className="flex h-10 items-center rounded-lg bg-muted/50 px-4 text-xs font-medium text-muted-foreground">
          Email Address
        </div>
        <div className="flex items-center gap-3 pt-2">
          <div className="flex h-4 w-4 items-center justify-center rounded bg-primary text-primary-foreground">
            <CheckCircle2 className="size-3" />
          </div>
          <span className="text-xs font-medium">Accept terms</span>
        </div>
      </div>
    </Card>
  )
}


const PerformanceMetricsCard = () => {
  return (
    <Card className="flex flex-row items-center justify-between border-none p-8 shadow-xl shadow-primary/5 ring-0">
      <div className="flex items-center gap-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Activity className="size-8" />
        </div>
        <div>
          <h4 className="font-headline text-xl font-extrabold">Performance Metrics</h4>
          <p className="text-sm text-muted-foreground">
            System health is at <span className="text-primary font-bold">98% efficiency</span>.
          </p>
        </div>
      </div>
      <div className="flex items-end gap-1.5">
        <div className="h-8 w-2 rounded-full bg-primary animate-pulse"></div>
        <div className="h-12 w-2 rounded-full bg-primary/40"></div>
        <div className="h-6 w-2 rounded-full bg-primary/20"></div>
      </div>
    </Card>
  )
}