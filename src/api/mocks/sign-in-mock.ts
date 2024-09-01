import { http, HttpResponse } from "msw";
import { SignInBody } from "../sign-in";

export const SignInMock = http.post<never, SignInBody>(
  "authenticate",
  async ({ request }) => {
    const { email } = await request.json();
    if (email === "test@test.com") {
      return new HttpResponse(null, {
        status: 200,
        headers: {
          "Set-Cookie": "auth=ample-jwt",
        },
      });
    }

    return new HttpResponse(null, { status: 401 });
  },
);
