export interface Props {
  text?: string;
  imgUrl: string;
  alt?: string;
  addClass?: string;
  addClassText?: string;
  addClassImg?: string;
  colorDividingLine?: string;
  onClick?(): void;
  type?: "button" | "submit";
}
