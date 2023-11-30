/* eslint-disable @typescript-eslint/ban-types */
import http from "../utils/http";
import { Products, Product } from "../types/product.type";

export const getProducts = (page: number | string, limit: number | string) =>
  http.get<Products>("product", {
    params: {
      _page: page,
      _limit: limit,
    },
  });
export const getProduct = (id: number | string) =>
  http.get<Products>(`product/${id}`);

export const addProduct = (product: Omit<Product, "id">) =>
  http.post<Products>("postProduct", product);

export const deleteProduct = (id: number | string) =>
  http.delete<{}>(`deleteProduct/${id}`);
