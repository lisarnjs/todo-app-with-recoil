import { atom } from "recoil";

export interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE"; // 저 3가지 string만 사용할 수 있게 제한하는 방법
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});
