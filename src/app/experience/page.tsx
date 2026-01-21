import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { EXPERIENCE } from "@/lib/data";
import { Briefcase } from "lucide-react";

export default function ExperiencePage() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-bold font-headline mb-8 flex items-center gap-3"><Briefcase className="h-10 w-10 text-primary" /> Work Experience</h1>
        <div className="space-y-6">
          {EXPERIENCE.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2">
                  <div>
                    <CardTitle className="font-headline text-xl">{exp.role}</CardTitle>
                    <CardDescription className="text-base mt-1">{exp.company}</CardDescription>
                  </div>
                  <p className="text-sm text-muted-foreground whitespace-nowrap pt-1">{exp.period}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
