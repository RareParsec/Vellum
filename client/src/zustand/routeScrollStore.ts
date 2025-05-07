import { create } from "zustand";
import { combine } from "zustand/middleware";

export type RouteType = {
  route: string;
  scroll: number;
};

export const useRouteScrollStore = create(
  combine(
    {
      routes: new Map<string, number>(),
      scrollNow: false,
    },

    (set, get) => ({
      getRouteScroll: (route: string) => {
        const existingRouteScroll = get().routes.get(route);

        if (existingRouteScroll) {
          return existingRouteScroll;
        } else {
          return 0;
        }
      },
      setRouteScroll: ({ route, scroll }: { route: string; scroll: number }) => {
        set((state) => {
          const existingRoute = get().routes.get(route);

          const newRoutes = new Map(state.routes);

          if (existingRoute) {
            newRoutes.set(route, scroll);
          } else {
            newRoutes.set(route, scroll);
          }

          return { routes: newRoutes };
        });
      },
      triggerScroll: () => {
        set({ scrollNow: !get().scrollNow });
      },
    })
  )
);
