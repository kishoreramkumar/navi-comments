export interface CommentType {
  id: String;
  body: String;
  createdAt: number;
  createdBy: string;
  replies?: Array<CommentType>;
  updatedAt: number;
}
