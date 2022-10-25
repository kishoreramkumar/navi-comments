export interface CommentType {
  body: String;
  createdAt: BigInt;
  createdBy: string;
  replies?: Array<CommentType>;
  updatedAt: BigInt;
}
