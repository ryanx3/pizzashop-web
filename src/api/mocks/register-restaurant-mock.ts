import { http, HttpResponse } from "msw";
import { RegisterRestauntBody } from "../register-restaurant";

export const RegisterRestaurantMock = http.post<never, RegisterRestauntBody>(
  "/restaurant",
  async ({ request }) => {
    const { restaurantName } = await request.json();

    if (restaurantName === "Pizza Shop") {
      return new HttpResponse(null, {
        status: 201,
      });
    }

    return new HttpResponse(null, { status: 400 });
  },
);
