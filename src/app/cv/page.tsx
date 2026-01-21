import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QrCode } from "lucide-react";

export default function CVPage() {
    const qrCodeImage = PlaceHolderImages.find(p => p.id === 'cv-qr-code');
    return (
        <div className="max-w-md mx-auto text-center">
            <h1 className="text-4xl font-bold font-headline mb-8 flex items-center justify-center gap-3"><QrCode className="h-10 w-10 text-primary" /> Download My CV</h1>
            <p className="text-muted-foreground mb-8">
                Scan the QR code below to download a PDF version of my curriculum vitae.
            </p>
            <Card>
                <CardContent className="p-6">
                    {qrCodeImage && (
                        <Image
                            src={qrCodeImage.imageUrl}
                            alt={qrCodeImage.description}
                            data-ai-hint={qrCodeImage.imageHint}
                            width={200}
                            height={200}
                            className="rounded-lg shadow-lg mx-auto"
                        />
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
