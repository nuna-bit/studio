import { Mail } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold font-headline mb-2 flex items-center gap-3"><Mail className="h-10 w-10 text-primary" /> Contact Me</h1>
            <p className="text-muted-foreground mb-8">
                Have a question or want to work together? Feel free to reach out.
            </p>
            <ContactForm />
        </div>
    );
}
