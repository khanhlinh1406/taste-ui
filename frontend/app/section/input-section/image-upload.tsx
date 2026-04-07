export default function ImageUpload() {
    return (
        <div id="image-upload" className="bg-gray-100 rounded-xl p-4">
            <span className="text-[0.6875rem] font-bold tracking-[0.05em] uppercase text-gray-500 block mb-4">Input Source</span>
            <h2 className="text-4xl font-extrabold font-headline tracking-tighter mb-4">Extract from Visuals</h2>
            <p className="text-gray-500">Upload an image or moodboard. Our AI dissects tonal layers, lighting, and textures to build your palette.</p>

            <div className="relative group cursor-pointer overflow-hidden rounded-xl bg-surface-container-lowest border-2 border-dashed border-gray-300/30 hover:border-blue-200/50 transition-all p-12 text-center">
                <img alt="Abstract gradient" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity" data-alt="minimalist abstract composition of floating soft geometric shapes with silk texture and ethereal lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyngFTc_hiG4rSx0B8DOfx5Qsqp5wbIJ3ZakuRXpKQBDFmbLeLGvWNRZR0AcCq5dSNhieSsAWWI7QJWtgH_P8c6h0ZPVADqEStRBj3s9W3zw7pZUWGLLcIXgQT80PoxoWAndOlmIG76QWdcwb1FnEVH2n36_6-A_51fEh2u189sHMSFt4uBX_54B7dx_TO_CrRNa7UEZLLxZbnRvuVDyU7bkZFNyKQuZSg30HXElEvs1plLSURnNnL_GJWXLsMK_hMObYyz0R2WfQh" />
                <span className="material-symbols-outlined text-5xl text-blue-500 mb-4">cloud_upload</span>
                <p className="text-gray-500 font-semibold">Drop image here or click to browse</p>
                <p className="text-sm text-gray-500 mt-2">JPG, PNG or WEBP up to 10MB</p>
            </div>
        </div>
    )
}