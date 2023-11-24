/* eslint-disable @typescript-eslint/ban-types */
import httpProduct from "../utils/http";
import { Products, Product } from "../types/product.type";

export const getProducts = (page: number | string, limit: number | string) =>
  httpProduct.get<Products>("product", {
    params: {
      _page: page,
      _limit: limit,
    },
  });
export const getProduct = (id: number | string) =>
  httpProduct.get<Products>(`product/${id}`);

export const addProduct = (product: Omit<Product, "id">) =>
  httpProduct.post<Products>("/postproduct", product);

export const deleteProduct = (id: number | string) =>
  httpProduct.delete<{}>(`deleteProduct/${id}`);
