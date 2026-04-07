import { AppDispatch } from "@/app/store";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { extractColorsThunk } from "@/app/store/slices/designSlice";

export default function ImageUpload() {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const dispatch = useDispatch<AppDispatch>();

    const [previewPic, setPreviewPic] = useState<string | null>(null);

    const handleClick = () => {
        inputRef.current?.click();
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) {
            handleFile(file);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            handleFile(file);
        }
    };

    const handleFile = async (file: File) => {
        if (!file) return;
        setPreviewPic(URL.createObjectURL(file));
        dispatch(extractColorsThunk(file));
    };

    return (
        <div id="image-upload" className="rounded-xl bg-gray-100 p-4">
            <span className="mb-4 block text-[0.6875rem] font-bold uppercase tracking-[0.05em] text-gray-500">
                Input Source
            </span>
            <h2 className="font-headline mb-4 text-4xl font-extrabold tracking-tighter">
                Extract from Visuals
            </h2>
            <p className="text-gray-500">
                Upload an image or moodboard. Our AI dissects tonal layers,
                lighting, and textures to build your palette.
            </p>
            {!previewPic && (
                <div
                    className="bg-surface-container-lowest group relative cursor-pointer overflow-hidden rounded-xl border-2 border-dashed border-gray-300/30 p-12 text-center transition-all hover:cursor-pointer hover:border-blue-200/50"
                    onClick={handleClick}
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                >
                    <img
                        alt="Abstract gradient"
                        className="absolute inset-0 h-full w-full object-cover opacity-10 transition-opacity group-hover:opacity-20"
                        data-alt="minimalist abstract composition of floating soft geometric shapes with silk texture and ethereal lighting"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyngFTc_hiG4rSx0B8DOfx5Qsqp5wbIJ3ZakuRXpKQBDFmbLeLGvWNRZR0AcCq5dSNhieSsAWWI7QJWtgH_P8c6h0ZPVADqEStRBj3s9W3zw7pZUWGLLcIXgQT80PoxoWAndOlmIG76QWdcwb1FnEVH2n36_6-A_51fEh2u189sHMSFt4uBX_54B7dx_TO_CrRNa7UEZLLxZbnRvuVDyU7bkZFNyKQuZSg30HXElEvs1plLSURnNnL_GJWXLsMK_hMObYyz0R2WfQh"
                    />
                    <span className="material-symbols-outlined mb-4 text-5xl text-blue-500">
                        cloud_upload
                    </span>
                    <p className="font-semibold text-gray-500">
                        Drop image here or click to browse
                    </p>
                    <p className="mt-2 text-sm text-gray-500">
                        JPG, PNG or WEBP up to 10MB
                    </p>
                    <input
                        ref={inputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleChange}
                        className="hidden"
                    />
                </div>
            )}
            {previewPic && (
                <>
                    <div className="bg-surface-container-lowest group relative cursor-pointer overflow-hidden rounded-xl border-2 border-dashed border-gray-300/30 p-1 transition-all hover:border-blue-200/100">
                        <img
                            alt="Abstract gradient"
                            className="h-full w-full object-cover"
                            data-alt="preview pic"
                            src={previewPic ?? undefined}
                        />
                    </div>
                    <button
                        className="w-full rounded-md bg-white py-2 text-center text-red-500 
                        hover:shadow-gray-300 hover:border-red-300 hover:border-dashed hover:border-2"
                        onClick={() => setPreviewPic(null)}
                    >
                        <div className="flex justify-center gap-2 align-middle">
                            <span className="material-symbols-outlined hover:scale-125">
                                remove_selection
                            </span>
                            Remove image
                        </div>
                    </button>
                </>
            )}
        </div>
    );
}
