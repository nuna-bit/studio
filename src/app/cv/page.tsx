// No 'use client', no useEffect, no process.env

export default function CVPage() {
    // The path `/Maria-Jose-CV.pdf` will be automatically prefixed
    // with the `basePath` by Next.js during export.

    return (
        <div className="w-full h-[calc(100vh-8rem)] p-4">
            <iframe
                src="/Maria-Jose-CV.pdf"
                className="w-full h-full border rounded-lg"
                title="Maria Jose CV"
            />
        </div>
    );
}
