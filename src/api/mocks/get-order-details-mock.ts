import { http, HttpResponse } from "msw";

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from "../get-order-details";

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>("/orders/:orderId", ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      email: "test@test.com",
      name: "Test Name",
      phone: "999999999",
    },
    status: "pending",
    createdAt: new Date().toISOString(),
    totalInCents: 4000,
    orderItems: [
      {
        id: "order-item-1",
        priceInCents: 1000,
        product: { name: "Pizza Pepperoni" },
        quantity: 1,
      },
      {
        id: "order-item-2",
        priceInCents: 1500,
        product: { name: "Pizza Onion" },
        quantity: 2,
      },
    ],
  });
});
