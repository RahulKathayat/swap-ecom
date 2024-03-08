import { Home, Profile, SignIn, SignUp,Configure,Subscription } from "@/pages";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "profile",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "Sign In",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    name: "Sign Up",
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    name: "subscribe",
    path: "/subscription",
    element: <Subscription />,
  },
  {
    name: "how to configure",
    path: "/configure",
    element: <Configure />,
  },
];

export default routes;
