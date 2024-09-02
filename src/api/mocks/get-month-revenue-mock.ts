import { http, HttpResponse } from "msw";

import { GetMonthRevenueResponse } from "../get-month-revenue";

export const GetDayOrdersAmountMock = http.get<
  never,
  never,
  GetMonthRevenueResponse
>("/metrics/day-orders-amount", () => {
  return HttpResponse.json({
    receipt: 20,
    diffFromLastMonth: -5,
  });
});
