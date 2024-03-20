import { ReactNode } from "react";

export interface Props {
  data: string | number;
  shortDescription: string | ReactNode;
  addClass?: string;
  addClassData?: string;
  addClassText?: string;
}
