import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ContactPage() {
    return (
        <div className="space-y-12 text-center">
            <div>
                <h1 className="text-4xl font-bold font-headline mb-2 flex items-center justify-center gap-3"><Mail className="h-10 w-10 text-primary" /> Contact Me</h1>
                <p className="text-muted-foreground max-w-xl mx-auto">
                    Let&apos;s keep in touch! You can also find me on GitHub and LinkedIn.
                </p>
            </div>
            
            <div className="flex flex-col items-center gap-6">
                 <Link href="mailto:mariajose.salasmiranda@gmail.com" passHref>
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                        <Send className="mr-2 h-4 w-4" />
                        Send an Email
                    </Button>
                </Link>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link href="https://github.com/nuna-bit" passHref target="_blank">
                        <Button variant="outline" size="lg">
                            <Github className="mr-2" />
                            GitHub
                        </Button>
                    </Link>
                    <Link href="https://www.linkedin.com/in/your-linkedin-profile/" passHref target="_blank">
                        <Button variant="outline" size="lg">
                            <Linkedin className="mr-2" />
                            LinkedIn
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
