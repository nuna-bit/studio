import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import { Separator } from '@/components/ui/separator';

const KaggleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M8 3V21" />
        <path d="M8 12L17 3" />
        <path d="M8 12L17 21" />
    </svg>
);

const HuggingFaceIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="9" cy="9.5" r="0.5" fill="currentColor" stroke="none" />
        <circle cx="15" cy="9.5" r="0.5" fill="currentColor" stroke="none" />
        <path d="M12 15.5c-3.3 0-6-1.1-6-2.5 0-1.4 2.7-2.5 6-2.5s6 1.1 6 2.5c0 1.4-2.7 2.5-6 2.5z" />
    </svg>
);

const MediumIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" height="24" width="24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.62 12A3.21 3.21 0 0 1 17.4 8.78a3.22 3.22 0 0 1 0 6.44A3.21 3.21 0 0 1 20.62 12zM24 12a1.2 1.2 0 0 1-1.19 1.21A1.2 1.2 0 0 1 21.6 12a1.2 1.2 0 0 1 1.2-1.21A1.2 1.2 0 0 1 24 12z" />
    </svg>
);

export default function ContactPage() {
    return (
        <div className="space-y-12">
            <div className="text-center">
                <h1 className="text-4xl font-bold font-headline mb-2 flex items-center justify-center gap-3"><Mail className="h-10 w-10 text-primary" /> Contact Me</h1>
                <p className="text-muted-foreground">
                    Have a question or want to work together? Send me a message!
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
                <div className="md:col-span-2">
                    <ContactForm />
                </div>
                <div className="space-y-4 text-center md:text-left">
                    <h3 className="text-xl font-semibold font-headline">Or find me on</h3>
                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        <Link href="https://github.com/nuna-bit" passHref target="_blank">
                            <Button variant="outline" size="lg" className="w-full">
                                <Github className="mr-2" />
                                GitHub
                            </Button>
                        </Link>
                        <Link href="https://www.linkedin.com/in/mj-salas/" passHref target="_blank">
                            <Button variant="outline" size="lg" className="w-full">
                                <Linkedin className="mr-2" />
                                LinkedIn
                            </Button>
                        </Link>
                        <Link href="https://www.kaggle.com/mariajosesm" passHref target="_blank">
                            <Button variant="outline" size="lg" className="w-full">
                                <KaggleIcon className="mr-2" />
                                Kaggle
                            </Button>
                        </Link>
                        <Link href="https://huggingface.co/nuna-bit" passHref target="_blank">
                            <Button variant="outline" size="lg" className="w-full">
                                <HuggingFaceIcon className="mr-2" />
                                HuggingFace
                            </Button>
                        </Link>
                        <Link href="https://medium.com/@mj-salas" passHref target="_blank">
                            <Button variant="outline" size="lg" className="w-full">
                                <MediumIcon className="mr-2" />
                                Medium
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
