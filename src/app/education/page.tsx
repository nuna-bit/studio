import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { CERTIFICATIONS, EDUCATION } from "@/lib/data";
import { GraduationCap, Award, MapPin, ExternalLink } from "lucide-react";
import Link from 'next/link';

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
                    {edu.location && (
                        <CardDescription className="text-sm text-muted-foreground flex items-center gap-1.5 mt-1">
                            <MapPin className="h-4 w-4" />
                            {edu.location}
                        </CardDescription>
                    )}
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
          {CERTIFICATIONS.map((cert, index) => {
            const cardContent = (
              <Card className="hover:shadow-lg transition-shadow duration-300 h-full group">
                <CardHeader>
                  <CardTitle className="font-headline text-xl flex items-center justify-between">
                    <span>{cert.name}</span>
                    {cert.url && cert.url !== '#' && <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />}
                  </CardTitle>
                  <CardDescription className="text-base mt-1">{cert.issuer} - {cert.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            );

            if (cert.url && cert.url !== '#') {
              return (
                <Link key={index} href={cert.url} target="_blank" rel="noopener noreferrer" className="block transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-lg">
                  {cardContent}
                </Link>
              );
            }
            
            return <div key={index}>{cardContent}</div>;
          })}
        </div>
      </section>
    </div>
  );
}
