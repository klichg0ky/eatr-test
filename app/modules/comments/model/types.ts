export type CommentId = Comment['id'];

export type Comment = {
  id: number;
  message: string;
  parentId: CommentId;
  username: string;
};

export type CommentsIdsByParentIdStore = {
  map: Record<CommentId, CommentId[]>;
  addMessage(data: Comment): void;
};

export type CommentsByIdStore = {
  map: Record<CommentId, Comment>;
  addMessage(data: Comment): void;
};

export type SelectedCommentStore = {
  selectedCommentId: number;
  setSelectedComment(id: CommentId): void;
};
