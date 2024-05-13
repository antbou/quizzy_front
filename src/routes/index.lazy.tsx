import { useListQuizzes } from "@/hooks/quizzes/useListQuizzes";
import { Quiz } from "@/types";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const { quizzes, isLoading, error } = useListQuizzes({});

  return (
    <div className="p-2">
      <h1 className="text-2xl">Quizzes</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {!isLoading && (
        <ul>
          {(quizzes as Quiz[]).map((quiz: Quiz) => (
            <li key={quiz.id}>{quiz.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
