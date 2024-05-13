import { api } from "@/lib/utils";
import { Pagination, PaginationResponse, Quiz } from "@/types";
import qs from "qs";

interface ListQuizzesOptions {
  pagination?: Pagination;
  ids?: string[];
}

export const quizzes = {
  listQuizzes: ({ pagination, ids }: ListQuizzesOptions = {}) => {
    const queryString = qs.stringify({
      pagination: pagination
        ? { limit: pagination.limit, page: pagination.page }
        : undefined,
      ids,
    });

    return api()
      .get("quizzes", { searchParams: queryString })
      .json<{ quizzes: Quiz[]; pagination: PaginationResponse }>();
  },
};
