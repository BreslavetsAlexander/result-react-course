export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export type RefetchParams = {
  params: Record<string, string | number | boolean>;
};
