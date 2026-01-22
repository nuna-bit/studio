import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SKILLS } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from 'next/image';
import { User, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  const profileImage = PlaceHolderImages.find(p => p.id === 'profile-picture');

  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold font-headline mb-8 flex items-center gap-3"><User className="h-10 w-10 text-primary" /> About Me</h1> 
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
        <div className="md:col-span-1 flex justify-center">
          <div className="relative">
            {profileImage && (
              <Image
                src={profileImage.imageUrl}
                alt={profileImage.description}
                data-ai-hint={profileImage.imageHint}
                width={200}
                height={200}
                className="rounded-full border-4 border-primary shadow-lg"
              />
            )}
            {!profileImage && <AvatarFallback>AD</AvatarFallback>}
          </div>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-4xl lg:text-5xl font-bold font-headline text-primary">Maria Jose</h2>
          <p className="text-xl text-muted-foreground mt-1">Jr Data Scientist Trainee</p>
          <div className="mt-4 text-lg space-y-4">
            <p>
              I started out in Law because I&apos;ve always been fascinated by complex systems and the logic behind rules. But as I moved deeper into my studies, I realized that my real drive came from a place of curiosity, I wanted to solve puzzles and build solutions rather than just interpret existing ones.
            </p>
            <p>
              Making the jump from Law to Artificial Intelligence was a defining moment for me. It was a challenge to my own self-doubt, and proving that I could not only make the transition but graduate 110/110 cum laude was the ultimate validation of my capacity to grow.
            </p>
            <p>
             Since then, I&apos;ve been focused on turning theory into high-stakes reality. Whether it was identifying cost-saving insights during my time at ASML or my current work at Heroes B.V., where I&apos;m building scalable ML and GenAI solutions using Databricks and MLflow, I&apos;ve shown that I can handle the full data lifecycle.
            </p>
            <p>
              My journey has taught me a simple, powerful lesson: it is never too late to start something new. Ambition is only half the battle, the real value comes from the discipline to keep showing up until the unfamiliar becomes second nature.
            </p>
            <p>
              Here is the work I&apos;ve done so far as I continue on this path.
            </p>
          </div>
          <div className="mt-6 flex justify-center md:justify-start">
            <a href="\studio\Maria-Jose-CV.pdf" download="Maria-Jose-CV.pdf" target="_blank" rel="noopener noreferrer">
                <Button>
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                </Button>
            </a>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold font-headline mb-6">Skills</h2>
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-3">
              {SKILLS.map((skill) => (
                <Badge key={skill.name} variant="secondary" className="text-base py-2 px-4 flex items-center gap-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20">
                  <skill.icon className="h-5 w-5" />
                  {skill.name}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
