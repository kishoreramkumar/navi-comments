import { CommentType } from "./types";

export const getPersistCommentsData = () => {
  let comments = [];
  try {
    comments = JSON.parse(localStorage.getItem("comments") ?? "[]");
  } catch (e) {
    console.log("Dont have access to localstorage");
  }
  return comments;
};

export const setPersistCommentsData = (data: Array<CommentType>) => {
  try {
    localStorage.setItem("comments", JSON.stringify(data));
  } catch (e) {
    console.log("Dont have access to localstorage");
  }
};
