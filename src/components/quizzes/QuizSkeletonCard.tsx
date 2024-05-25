import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  height?: string;
};

export function QuizSkeletonCard({ height = "250px" }: Props) {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className={`h-[${height}] w-full rounded-lg`} />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}
