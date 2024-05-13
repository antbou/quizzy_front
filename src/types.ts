export type Account = {
  id: string;
  username: string;
  provider: string | null;
};

export type Quiz = {
  id: string;
  title: string;
  introduction: string;
  image: {
    id: string;
    url: string | null;
  };
  createdAt: string;
  updatedAt: string;
  createdBy: Account;
  status: "draft" | "published" | "archived";
};

export type Pagination = {
  page: number;
  limit: number;
};

export type PaginationResponse = {
  count: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  itemsPerPage: number;
  total: number;
  totalPages: number;
};
