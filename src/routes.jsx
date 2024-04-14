import { Home, SignIn, SignUp,Configure,Subscription,IntegrationDocs ,ShopifyDocs,NonShopifyDocs} from "@/pages";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
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
  {
    name: "Integration Docs",
    path: "/docs",
    element: <IntegrationDocs />,
  },
  {
    name: "shopify",
    path: "/docs/shopify",
    element: <ShopifyDocs />,
  },
  {
    name: "nonshopify",
    path: "/docs/nonshopify",
    element: <NonShopifyDocs />,
  },
];

export default routes;
