const ROUTES = {
  HOME: "/",
  SIGN_UP: "/sign-up",
  SIGN_IN: "/sign-in",
  ASK_QUESTION: "/ask-question",
  PROFILE: (id: string) => `/profile/${id}`,
  QUESTION: (id: string) => `/question/${id}`,
  TAGS: (id: string) => `/tags/${id}`,
};

export default ROUTES;
