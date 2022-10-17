interface ConfigObj<TRoute extends string> {
  routes: TRoute[];
  fetchers: {
    [K in TRoute]: () => any;
  };
}

type RouteType = "/" | "/about" | "/contact";

/**
 *   - it is a clear duplication that RouteType and routes declared in configObj are equals in terms of values
 *   - or we could say RouteType is hard coded
 *
 */

const configObj: ConfigObj<RouteType> = {
  routes: ["/", "/about", "/contact"],

  fetchers: {
    "/": () => {
      return {};
    },
    "/about": () => {
      return {};
    },
    "/contact": () => {
      return {};
    },
  },
};

/**
 *   - [X] identity function
 *
 */

const generateConfigObject = <TRoute extends string>(
  config: ConfigObj<TRoute>
) => config;

const configObj2 = generateConfigObject({
  routes: ["/", "/about", "/contact"],

  fetchers: {
    "/": () => {
      return {};
    },
    "/about": () => {
      return {};
    },
    "/contact": () => {
      return {};
    },
  },
});
