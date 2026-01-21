'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { generateProjectSummary } from '@/ai/flows/generate-project-summary';
import { Github, ExternalLink, Sparkles, Loader2 } from 'lucide-react';
import Link from 'next/link';

type Project = {
    title: string;
    description: string;
    tags: string[];
    links: { type: 'github' | 'demo'; url: string }[];
};

export default function ProjectCard({ project }: { project: Project }) {
    const [summary, setSummary] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleGenerateSummary = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const result = await generateProjectSummary({ projectDescription: project.description });
            setSummary(result.summary);
        } catch (e) {
            setError('Failed to generate summary. Please try again.');
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
                <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
                <p className="text-sm text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline">{tag}</Badge>
                    ))}
                </div>
                {summary && (
                    <div className="mt-4 p-3 bg-primary/10 rounded-lg animate-in fade-in-50">
                        <h4 className="font-semibold text-sm flex items-center gap-2 text-primary"><Sparkles className="h-4 w-4"/> AI Summary</h4>
                        <p className="text-sm text-primary/80 mt-1">{summary}</p>
                    </div>
                )}
                {error && <p className="text-sm text-destructive mt-2">{error}</p>}
            </CardContent>
            <CardFooter className="flex-col items-start gap-4 pt-4">
                 <Button onClick={handleGenerateSummary} disabled={isLoading} className="w-full" variant="outline">
                    {isLoading ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                        <Sparkles className="mr-2 h-4 w-4" />
                    )}
                    Generate AI Summary
                </Button>
                <div className="flex items-center gap-2">
                    {project.links.map((link) => (
                        <Link href={link.url} key={link.type} target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" size="sm" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                                {link.type === 'github' ? <Github className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" />}
                                <span>{link.type === 'github' ? 'GitHub' : 'Demo'}</span>
                            </Button>
                        </Link>
                    ))}
                </div>
            </CardFooter>
        </Card>
    );
}
