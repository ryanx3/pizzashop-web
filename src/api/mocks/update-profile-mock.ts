import { http, HttpResponse } from "msw";

import { UpdateProfileResponse } from "../update-profile";

export const updateProfileMock = http.put<never, UpdateProfileResponse>(
  "/profile",
  async ({ request }) => {
    const { name } = await request.json();

    if (name === "Updated Shop") {
      return new HttpResponse(null, { status: 204 });
    }

    return new HttpResponse(null, { status: 400 });
  },
);
