import { quizzes } from "@/services/quizzes";
import { Pagination } from "@/types";
import { useQuery } from "@tanstack/react-query";

type Props = {
  pagination?: Pagination;
};

export function useListQuizzes({ pagination }: Props) {
  const queryKey = ["listQuizzes"];

  const { data, isLoading, error } = useQuery({
    queryKey,
    queryFn: () => quizzes.listQuizzes({ pagination }),
  });

  return {
    quizzes: data?.quizzes ?? [],
    pagination: data?.pagination,
    isLoading,
    error,
  };
}
