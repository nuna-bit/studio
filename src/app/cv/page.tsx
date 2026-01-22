'use client';

import { useEffect, useState } from 'react';

export default function CVPage() {
   const [path, setPath] = useState('');

    useEffect(() => {
        // In a static export with a basePath, the path to public assets can be tricky.
        // We construct it dynamically to be safe.
        const basePath = process.env.NODE_ENV === 'production' ? '/studio' : '';
        setPath(`${basePath}/Maria-Jose-CV.pdf`);
    }, []);

    if (!path) {
        return <div className="p-4">Loading CV...</div>;
    }

    return (
        <div className="w-full h-[calc(100vh-8rem)] p-4">
            <iframe
                src={path}
                className="w-full h-full border rounded-lg"
                title="Maria Jose CV"
            />
        </div>
    );
}
