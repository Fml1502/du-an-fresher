export interface Product {
  id: number;
  namePr: string;
  pricePr: string;
  detail: string;
  imgPr: string;
}
export type Products = Pick<
  Product,
  "id" | "namePr" | "pricePr" | "imgPr" | "detail"
>[];
