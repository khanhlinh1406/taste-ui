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
                <span className="material-symbols-outlined text-[20px]">
                  brush
                </span>
              </div>
              <span className="font-bold">Adaptive Radii</span>
            </li>
            <li className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-300 text-slate-700">
                <span className="material-symbols-outlined text-[20px]">
                  layers
                </span>
              </div>
              <span className="font-bold">Elevation Levels</span>
            </li>
            <li className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-fuchsia-300 text-fuchsia-900">
                <span className="material-symbols-outlined text-[20px]">
                  text_fields
                </span>
              </div>
              <span className="font-bold">Scale Hierarchies</span>
            </li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <div className="grid grid-cols-2">
            <div className="mx-2 flex flex-col gap-6 rounded-xl bg-white p-8 shadow-[0px_12px_32px_rgba(39,46,66,0.06)]">
              <div className="flex items-start justify-between">
                <div className="h-12 w-12 rounded-lg bg-blue-50"></div>
                <span className="material-symbols-outlined text-outline">
                  more_vert
                </span>
              </div>
              <div>
                <h4 className="font-headline mb-2 text-xl font-extrabold">
                  Interface Card
                </h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Demonstrating soft shadows and editorial spacing.
                </p>
              </div>
              <button className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-bold text-white hover:shadow-md">
                Action Button
              </button>
            </div>
            <div className="mx-2 space-y-4 rounded-xl bg-white p-8 shadow-[0px_12px_32px_rgba(39,46,66,0.06)]">
              <h4 className="text-on-surface-variant text-sm font-bold uppercase tracking-widest">
                Profile Data
              </h4>
              <div className="space-y-4">
                <div className="flex h-10 items-center rounded-lg bg-blue-50 px-4 text-xs text-gray-500">
                  Full Name
                </div>
                <div className="flex h-10 items-center rounded-lg bg-blue-50 px-4 text-xs text-gray-500">
                  Email Address
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-4 w-4 rounded bg-blue-500"></div>
                  <span className="text-xs font-medium">Accept terms</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white col-span-2 flex items-center justify-between rounded-xl p-8 mt-4 mx-2 shadow-[0px_12px_32px_rgba(39,46,66,0.06)]">
            <div className="flex items-center gap-6">
              <div className="bg-blue-50 flex h-16 w-16 items-center justify-center rounded-full">
                <span className="material-symbols-outlined text-primary text-3xl">
                  analytics
                </span>
              </div>
              <div>
                <h4 className="font-headline text-xl font-extrabold">
                  Performance Metrics
                </h4>
                <p className="text-on-surface-variant text-sm">
                  System health is at 98% efficiency.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="bg-blue-500 h-8 w-2 rounded-full"></div>
              <div className="bg-blue-500/40 h-12 w-2 rounded-full"></div>
              <div className="bg-blue-500/20 h-6 w-2 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
