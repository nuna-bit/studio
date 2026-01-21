import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ContactPage() {
    return (
        <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold font-headline mb-2 flex items-center justify-center gap-3"><Mail className="h-10 w-10 text-primary" /> Contact Me</h1>
            <p className="text-muted-foreground mb-8">
                You can find me on the following platforms. Let's connect!
            </p>
            <div className="flex justify-center gap-4">
                <Link href="#" passHref>
                    <Button variant="outline" size="lg">
                        <Github className="mr-2" />
                        GitHub
                    </Button>
                </Link>
                <Link href="#" passHref>
                    <Button variant="outline" size="lg">
                        <Linkedin className="mr-2" />
                        LinkedIn
                    </Button>
                </Link>
            </div>
        </div>
    );
}
