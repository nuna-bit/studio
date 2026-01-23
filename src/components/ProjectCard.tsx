'use client';

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, BrainCircuit, Trophy } from 'lucide-react';
import Link from 'next/link';

type ProjectLink = {
    type: 'github' | 'demo' | 'huggingface' | 'kaggle';
    url: string;
};
type Project = {
    title: string;
    description: string;
    tags: string[];
    links: ProjectLink[];
};

const linkDetails = {
    github: { icon: Github, label: 'GitHub' },
    demo: { icon: ExternalLink, label: 'Demo' },
    huggingface: { icon: BrainCircuit, label: 'Hugging Face' },
    kaggle: { icon: Trophy, label: 'Kaggle' }
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
                        {project.links.map((link) => {
                        const details = linkDetails[link.type] || linkDetails.demo;
                        return (
                            <Link href={link.url} key={link.type} target="_blank" rel="noopener noreferrer">
                                <Button variant="ghost" size="sm" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                                    <details.icon className="h-4 w-4" />
                                    <span>{details.label}</span>
                                </Button>
                            </Link>
                        );
                    })}
                </div>
            </CardFooter>
        </Card>
    );
}
