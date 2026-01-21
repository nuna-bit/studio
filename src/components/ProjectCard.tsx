'use client';

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

type Project = {
    title: string;
    description: string;
    tags: string[];
    links: { type: 'github' | 'demo'; url: string }[];
};

export default function ProjectCard({ project }: { project: Project }) {

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
            </CardContent>
            <CardFooter className="flex-col items-start gap-4 pt-4">
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
