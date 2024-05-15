import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { Button } from "../ui/Button";
import { StarIcon, User2 } from "lucide-react";
import { Quiz } from "@/types";
import { AspectRatio } from "../ui/aspect-ratio";
import moment from "moment";

type Props = {
  quiz: Quiz;
};

export function QuizCard({ quiz }: Props) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer">
      <CardHeader className="gap-4 space-y-0">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-4xl font-semibold  text-secondary capitalize">
              {quiz.title}
            </CardTitle>
            <Button variant="outline" className="shadow-none">
              <StarIcon className="mr-2 h-4 w-4" />
              Star
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <AspectRatio ratio={16 / 9}>
              <img
                src={quiz.image.url ?? "https://picsum.photos/300/200"}
                alt={quiz.title}
                className="object-cover rounded-lg w-full h-full"
              />
            </AspectRatio>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center hover:text-accent">
            <User2 className="h-4 w-4 mr-1" />
            {quiz.createdBy.username}
          </div>
          <div>{moment(quiz.updatedAt).format("MMM D, YYYY")}</div>
        </div>
      </CardContent>
    </Card>
  );
}
