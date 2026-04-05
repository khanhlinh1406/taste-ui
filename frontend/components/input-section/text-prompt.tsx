export default function TextPrompt() {
    return (
        <div id="text-prompt" className="bg-blue-100 rounded-xl p-4">
            <span className="text-[0.6875rem] font-bold tracking-[0.05em] uppercase text-gray-500 block mb-4">Text Synthesis</span>
            <h2 className="text-4xl font-extrabold font-headline tracking-tighter mb-4">Define by Atmosphere</h2>
            <p className="text-gray-500">Describe the feeling. "Industrial yet airy", "Nordic winter sunset", or "Precision Swiss typography"</p>

            <div className="my-4">
                <label className="text-[0.6875rem] font-bold tracking-[0.05em] uppercase text-on-surface-variant block mb-2">PROMPT</label>
                <textarea className="w-full bg-surface-container-lowest border-none rounded-xl p-6 text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-primary/20 transition-all resize-none shadow-sm"
                    placeholder="A premium dark interface for a luxury watch marketplace. High contrast, deep blacks, and gold accents with elegant serif headers."
                    rows={4}></textarea>
            </div>

            <div>
                <button className="w-full bg-blue-500 text-white font-bold text-center py-2 rounded-md hover:bg-blue-600 hover:shadow">
                    <div className="flex align-center justify-center gap-2">
                        <span>Generate Design System</span>
                        <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">bolt</span>
                    </div>

                </button>
            </div>
        </div>
    )
}