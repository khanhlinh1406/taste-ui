import { AppDispatch } from "@/app/store";
import { useRef, useState } from "react";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import { extractColorsThunk, setColors } from "@/app/store/slices/designSlice";

import { Spinner } from "@/app/components/ui/spinner";
import { Button } from "@/app/components/ui/button";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/app/components/ui/card";

import { CopyX, CloudUpload, Loader2 } from "lucide-react";

export default function ImageUpload() {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const dispatch = useDispatch<AppDispatch>();
    const { loading } = useSelector((state: RootState) => state.design);

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
        <Card id="image-upload" className="border-none bg-muted/50 px-2 py-6 shadow-none">
            <CardHeader className="space-y-1 pb-4">
                <span className="text-[0.6875rem] font-bold uppercase tracking-[0.05em] text-muted-foreground">
                    Input Source
                </span>
                <CardTitle className="font-headline text-4xl font-extrabold tracking-tighter">
                    Extract from Visuals
                </CardTitle>
                <CardDescription className="text-sm">
                    Upload an image or moodboard. Our AI dissects tonal layers, lighting, and textures to build your palette.
                </CardDescription>
            </CardHeader>

            <CardContent>
                {!previewPic ? (
                    <div
                        className="group relative cursor-pointer overflow-hidden rounded-xl border-2 border-dashed border-muted-foreground/20 bg-background p-12 text-center transition-all hover:border-primary/50"
                        onClick={handleClick}
                        onDrop={handleDrop}
                        onDragOver={(e) => e.preventDefault()}
                    >
                        <img
                            alt="Abstract gradient"
                            className="absolute inset-0 h-full w-full object-cover opacity-5 transition-opacity group-hover:opacity-10"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyngFTc_hiG4rSx0B8DOfx5Qsqp5wbIJ3ZakuRXpKQBDFmbLeLGvWNRZR0AcCq5dSNhieSsAWWI7QJWtgH_P8c6h0ZPVADqEStRBj3s9W3zw7pZUWGLLcIXgQT80PoxoWAndOlmIG76QWdcwb1FnEVH2n36_6-A_51fEh2u189sHMSFt4uBX_54B7dx_TO_CrRNa7UEZLLxZbnRvuVDyU7bkZFNyKQuZSg30HXElEvs1plLSURnNnL_GJWXLsMK_hMObYyz0R2WfQh"
                        />

                        <div className="relative z-10 flex flex-col items-center">
                            <CloudUpload className="mb-4 size-12 text-primary transition-transform group-hover:-translate-y-1" />
                            <p className="font-semibold text-foreground">
                                Drop image here or click to browse
                            </p>
                            <p className="mt-2 text-sm text-muted-foreground">
                                JPG, PNG or WEBP up to 10MB
                            </p>
                        </div>

                        <input
                            ref={inputRef}
                            type="file"
                            accept="image/*"
                            onChange={handleChange}
                            className="hidden"
                        />
                    </div>
                ) : (
                    <div className="space-y-4">
                        <div className="group relative overflow-hidden rounded-xl border border-border bg-background p-1 transition-all hover:border-primary">
                            <img
                                alt="Preview"
                                className="aspect-video w-full rounded-lg object-cover"
                                src={previewPic}
                            />
                            {loading && (
                                <div className="absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-sm">
                                    <Loader2 className="size-8 animate-spin text-primary" />
                                </div>
                            )}
                        </div>

                        {!loading && (
                            <Button
                                variant="destructive"
                                size="lg"
                                className="w-full gap-2"
                                onClick={() => {
                                    setPreviewPic(null);
                                    dispatch(setColors([]));
                                }}
                            >
                                <CopyX className="size-4" />
                                Remove image
                            </Button>
                        )}
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
