/*
구분자
- 단일구분자
- 더간단하다
- Split
- Split.한방화.ㄱㄱ
*/
export function textReverseUnitDot(text: string): string {
  return text.split(".").reverse().join(".");
}