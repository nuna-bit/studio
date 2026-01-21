import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import { Separator } from '@/components/ui/separator';

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
                     <div className="flex justify-center md:justify-start gap-4">
                        <Link href="https://github.com/nuna-bit" passHref target="_blank">
                            <Button variant="outline" size="lg" className="w-full">
                                <Github className="mr-2" />
                                GitHub
                            </Button>
                        </Link>
                        <Link href="https://www.linkedin.com/in/mj-salas/" passHref>
                            <Button variant="outline" size="lg" className="w-full">
                                <Linkedin className="mr-2" />
                                LinkedIn
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
