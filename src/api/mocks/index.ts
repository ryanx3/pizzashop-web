import { env } from "@/env";
import { setupWorker } from "msw/browser";
import { signInMock } from "./sign-in-mock";

import { registerRestaurantMock } from "./register-restaurant-mock";
import { getDayOrdersAmountMock } from "./get-day-orders-amount-mock";
import { getMonthOrdersAmountMock } from "./get-month-orders-amount-mock";
import { getMonthCanceledOrdersAmountMock } from "./get-month-canceled-orders-mock";
import { getMonthRevenueMock } from "./get-month-revenue-mock";
import { getDailyRevenueInPeriodMock } from "./get-daily-revenue-in-period-mock";
import { getPopularProductsMock } from "./get-popular-products-mock";
import { getProfileMock } from "./get-profile-mock";
import { updateProfileMock } from "./update-profile-mock";
import { getManagedRestaurantMock } from "./get-managed-restaurant-mock";
import { getOrderMocks } from "./get-orders-mock";
import { getOrderDetailsMock } from "./get-order-details-mock";
import { approveOrderMock } from "./approve-order-mock";
import { cancelOrderMock } from "./cancel-order-mock";
import { deliverOrderMock } from "./deliver-order-mock";
import { DispatchOrderMock } from "./dispatch-order-mock";

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthRevenueMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
  getProfileMock,
  updateProfileMock,
  getManagedRestaurantMock,
  getOrderMocks,
  getOrderDetailsMock,
  approveOrderMock,
  cancelOrderMock,
  deliverOrderMock,
  DispatchOrderMock,
);

export async function EnableMsw() {
  if (env.MODE !== "test") {
    return;
  }
  await worker.start();
}
