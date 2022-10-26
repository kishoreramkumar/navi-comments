export interface CommentType {
  id: string;
  body: string;
  createdAt: number;
  createdBy: string;
  replies?: Array<CommentType>;
  updatedAt: number;
}
