import { Button } from "@/app/components/ui/button"

export default function HeroSection() {
    return (
        <div id="hero-section" className="p-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-500 text-[11px] font-bold tracking-widest uppercase rounded-full mb-8">
                <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
                The Future of Craft
            </div>
            <h1 className="text-[3.5rem] font-extrabold font-headline leading-[1.1] tracking-[-0.03em] text-black mb-6 max-w-4xl mx-auto">
                Generate design systems from <span className="text-blue-500 italic">pure intent</span>.
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                TasteUI leverages neural curation to transform moodboards, brand images, and text descriptions into production-ready UI tokens and components.
            </p>
            <div className="flex justify-center gap-4">
                <Button variant="default" size="lg">Start Crafting</Button>
                <Button variant="secondary" size="lg">View Showcase</Button>
            </div>
        </div>
    )
}