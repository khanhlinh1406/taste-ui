import ImageUpload from "./image-upload"
import TextPrompt from "./text-prompt"
export default function InputSection() {
    return (
        <div id="input-section" className="flex justify-between gap-6">
            <div className="flex-50">
                <ImageUpload></ImageUpload>
            </div>
            <div className="flex-50">
                <TextPrompt></TextPrompt>
            </div>
        </div>
    )
}