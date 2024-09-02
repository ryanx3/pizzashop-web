import { env } from "@/env";
import { setupWorker } from "msw/browser";
import { SignInMock } from "./sign-in-mock";
import { RegisterRestaurantMock } from "./register-restaurant-mock";
import { GetDayOrdersAmountMock } from "./get-day-orders-amount-mock";

export const worker = setupWorker(
  SignInMock,
  RegisterRestaurantMock,
  GetDayOrdersAmountMock,
);

export async function EnableMsw() {
  if (env.MODE !== "test") {
    return;
  }
  await worker.start();
}
