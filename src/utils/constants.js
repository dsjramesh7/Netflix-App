export const COMPANY_LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_PROFILE =
  "https://avatars.githubusercontent.com/u/84655307?v=4";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_KEY}`,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
