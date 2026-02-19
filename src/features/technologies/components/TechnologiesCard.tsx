import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import OrbitingTechs from "./OrbitingTechs";

interface TechnologiesCardProps {
  className?: string;
}

function TechnologiesCard({ className }: TechnologiesCardProps) {
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle className="text-3xl text-center">Technologies</CardTitle>
      </CardHeader>
      <CardContent>
        <OrbitingTechs />
      </CardContent>
      <CardFooter className="justify-center">
        <p className="font-light">Technologies I have been working with</p>
      </CardFooter>
    </Card>
  );
}
export default TechnologiesCard;
