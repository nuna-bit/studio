import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SKILLS } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from 'next/image';
import { User } from "lucide-react";

export default function AboutPage() {
  const profileImage = PlaceHolderImages.find(p => p.id === 'profile-picture');

  return (
    <div className="space-y-12">
        <h1 className="text-4xl font-bold font-headline mb-8 flex items-center gap-3"><User className="h-10 w-10 text-primary" /> About Me</h1>
        <section className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
        <div className="relative">
            {profileImage && (
              <Image
                src={profileImage.imageUrl}
                alt={profileImage.description}
                data-ai-hint={profileImage.imageHint}
                width={160}
                height={160}
                className="rounded-full border-4 border-primary shadow-lg"
              />
            )}
            {!profileImage && <AvatarFallback>AD</AvatarFallback>}
        </div>
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold font-headline text-primary">Alex Doe</h2>
          <p className="text-xl text-muted-foreground mt-1">Trainee Data Scientist</p>
          <p className="mt-4 max-w-xl text-lg">
            A passionate and detail-oriented data scientist in training, with a strong foundation in statistics, machine learning, and programming. Eager to apply my skills to solve real-world problems and extract actionable insights from data.
          </p>
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
