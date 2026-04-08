import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";

export default function GeneratedPalette() {
    const { colors, loading } = useSelector((state: RootState) => state.design);
    return (
        <div id="generated-palete py-6">
            <span className="mb-4 block text-[0.6875rem] font-bold uppercase tracking-[0.05em] text-gray-500">
                Live Curation
            </span>
            <h2 className="font-headline mb-4 text-4xl font-extrabold tracking-tighter">
                Generated Palette
            </h2>
            <div className="flex justify-end gap-2 font-bold text-blue-500">
                Refine Swatches
                <span className="material-symbols-outlined">tune</span>
            </div>

            {colors?.length > 0 && (
                <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-6">
                    {colors.map((color) => (
                        <div key={color.code}>
                            <div
                                className="mb-3 h-48 rounded-xl shadow-lg transition-transform hover:scale-105 hover:shadow-gray-400 group-hover:-translate-y-2"
                                style={{ backgroundColor: color.code }}
                            />
                            <p className="mb-1 text-xs font-bold uppercase tracking-widest">
                                {color.name}
                            </p>
                            <p className="text-on-surface-variant font-mono text-sm">
                                {color.code}
                            </p>
                        </div>
                    ))}
                </div>
            )}

            {(!colors || colors.length === 0) && (
                <div className="w-full bg-gray-100 py-12 text-center">
                    <div>
                        <span className="material-symbols-outlined text-blue-500">
                            arrow_upward_alt
                        </span>
                    </div>
                    <div className="text-[14px] text-slate-700">
                        Please upload an image on the section above to generate the palette
                    </div>
                </div>
            )}
        </div>
    );
}
