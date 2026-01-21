import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { CERTIFICATIONS, EDUCATION } from "@/lib/data";
import { GraduationCap, Award } from "lucide-react";

export default function EducationPage() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-bold font-headline mb-8 flex items-center gap-3"><GraduationCap className="h-10 w-10 text-primary" /> Education</h1>
        <div className="space-y-6">
          {EDUCATION.map((edu, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2">
                  <div>
                    <CardTitle className="font-headline text-xl">{edu.degree}</CardTitle>
                    <CardDescription className="text-base mt-1">{edu.institution}</CardDescription>
                  </div>
                  <p className="text-sm text-muted-foreground whitespace-nowrap pt-1">{edu.period}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold font-headline mb-8 flex items-center gap-3"><Award className="h-8 w-8 text-primary" /> Certifications</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="font-headline text-xl">{cert.name}</CardTitle>
                <CardDescription className="text-base mt-1">{cert.issuer} - {cert.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
