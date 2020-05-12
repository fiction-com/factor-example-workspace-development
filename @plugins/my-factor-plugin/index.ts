import { addRoutes, setting } from "@factor/api";

addRoutes({
  key: "myPluginRoutes",
  location: "content",
  routes: [
    {
      path: setting("myPlugin.myRoute"),
      component: setting("myPlugin.myComponent"),
    },
  ],
});
