import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ACHIEVEMENTS } from "@/lib/data";
import { Trophy, ExternalLink } from "lucide-react";
import Link from 'next/link';

export default function AchievementsPage() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-bold font-headline mb-8 flex items-center gap-3"><Trophy className="h-10 w-10 text-primary" /> Achievements & Awards</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {ACHIEVEMENTS.map((achievement, index) => {
            const cardContent = (
              <Card className="hover:shadow-lg transition-shadow duration-300 h-full group">
                <CardHeader>
                  <CardTitle className="font-headline text-xl flex items-center justify-between">
                    <span>{achievement.name}</span>
                    {achievement.url && achievement.url !== '#' && <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />}
                  </CardTitle>
                  <CardDescription className="text-base mt-1">{achievement.issuer} - {achievement.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            );

            if (achievement.url && achievement.url !== '#') {
              return (
                <Link key={index} href={achievement.url} target="_blank" rel="noopener noreferrer" className="block transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-lg">
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
