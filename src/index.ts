interface ConfigObj<TRoute extends string> {
  routes: TRoute[];
  fetchers: {
    [K in TRoute]: () => any;
  };
}

type RouteType = "/" | "/about" | "/contact" | "/contact";

/**
 *   - it is a clear duplication that RouteType and routes declared in configObj are equals in terms of values
 *   - or we could say RouteType is hard coded
 *   - Generic can not exist at the scope of object
 *   - RouteType and routes have to be consistent
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
 *   - [X] Generic has to exist within function
 *   - [X] TRoute pass from generateConfigObject into ConfigObj
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
