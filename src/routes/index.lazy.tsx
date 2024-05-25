import { QuizCard } from "@/components/quizzes/QuizCard";
import { QuizSkeletonCard } from "@/components/quizzes/QuizSkeletonCard";
import { useListQuizzes } from "@/hooks/quizzes/useListQuizzes";
import { Quiz } from "@/types";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const { quizzes, isLoading, error } = useListQuizzes({});

  return (
    <section className="p-2">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-center text-2xl flex flex-col md:flex-row sm:gap-[0.4ch] font-bold tracking-tight md:text-4xl">
          Learn and Create with
          <span className="text-primary">Interactive Quizzes!</span>
        </h1>
        <h2 className="max-w-[440px] text-center text-sm md:text-lg/relaxed">
          Discover New Topics or Craft Your Own Quizzes to Challenge Others.
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-10 max-w-[1000px] mx-auto">
        {error && (
          <p className="text-red-500">An error occurred: {error.message}</p>
        )}
        {isLoading ? (
          <>
            {Array.from({ length: 6 }).map((_, i) => (
              <QuizSkeletonCard key={i} />
            ))}
          </>
        ) : (
          <>
            {quizzes.map((quiz: Quiz) => (
              <QuizCard key={quiz.id} quiz={quiz} />
            ))}
          </>
        )}
      </div>
    </section>
  );
}
