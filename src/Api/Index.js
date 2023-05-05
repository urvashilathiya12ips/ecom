import { method } from "lodash";
import client, { METHODS, clientWithHeaders } from "./Client";
import { useEffect } from "react";

export const api = {
  auth: {
    login: (params) =>
      client({
        url: "/login",
        data: params,
        method: METHODS.POST,
      }),
    register: (params) =>
      client({
        url: "/Register",
        data: params,
        method: METHODS.POST,
      }),
  },
  profile: {
    get: () =>
      client({
        url: "/profile",
        method: METHODS.GET,
        headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` },
      }),
  },

  search: {
    get: (name) =>
      client({
        url: `Serchproduct/?name=${name}`,
        method: METHODS.GET,
        headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` },
      }),
  },
  FindProducts: {
    get: (type) =>
      client({
        url: `/categary/${type}`,
        method: METHODS.GET,
      }),
  },
  Setcategary: {
    get: (type) =>
      client({
        url: `/Setcategary/${type}`,
        method: METHODS.GET,
      }),
  },
  product: {
    get: (data) =>
      client({
        url: "/AllProuct",
        method: METHODS.GET,
        ...data,
      }),
    ProductCart: (id) =>
      client({
        url: `/productCart/${id}`,
        method: METHODS.POST,
        headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` },
      }),
    CartItem: () =>
      client({
        url: "/allCartData",
        method: METHODS.GET,
        headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` },
      }),
  },
};
