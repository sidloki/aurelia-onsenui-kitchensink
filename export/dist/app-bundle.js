System.register("aurelia-onsenui-kitchensink/app.html!node_modules/systemjs-plugin-text/text.js", [], function (_export, _context) {
  "use strict";

  var __useDefault;

  return {
    setters: [],
    execute: function () {
      _export("__useDefault", __useDefault = true);

      _export("__useDefault", __useDefault);

      _export("default", "<template>\n  <ons-navigator></ons-navigator>\n</template>\n");
    }
  };
});
System.register('aurelia-onsenui-kitchensink/app.js', ['node_modules/systemjs-plugin-babel/babel-helpers/classCallCheck.js', 'node_modules/systemjs-plugin-babel/babel-helpers/createClass.js'], function (_export, _context) {
  "use strict";

  var _classCallCheck, _createClass, App;

  return {
    setters: [function (_node_modulesSystemjsPluginBabelBabelHelpersClassCallCheckJs) {
      _classCallCheck = _node_modulesSystemjsPluginBabelBabelHelpersClassCallCheckJs.default;
    }, function (_node_modulesSystemjsPluginBabelBabelHelpersCreateClassJs) {
      _createClass = _node_modulesSystemjsPluginBabelBabelHelpersCreateClassJs.default;
    }],
    execute: function () {
      _export('App', App = function () {
        function App() {
          _classCallCheck(this, App);
        }

        _createClass(App, [{
          key: 'configureRouter',
          value: function configureRouter(config, router) {
            config.title = 'Aurelia Onsen UI Kitchen Sink';
            config.map([{
              route: ['', 'home'],
              name: 'home',
              moduleId: './pages/home',
              nav: false,
              title: 'Home'
            }, {
              route: 'navigation',
              name: 'navigation',
              moduleId: './pages/navigation/index',
              nav: true,
              title: 'Navigation'
            }, {
              route: 'navigation-page',
              name: 'navigation-page',
              moduleId: './pages/navigation/page',
              nav: false,
              title: 'Page',
              settings: {
                navigator: {
                  animation: 'default'
                }
              }
            }, {
              route: 'tabs',
              name: 'tabs',
              moduleId: './pages/tabs/index',
              nav: true,
              title: 'Tabs'
            }, {
              route: 'forms',
              name: 'forms',
              moduleId: './pages/forms',
              nav: true,
              title: 'Forms'
            }]);

            this.router = router;
          }
        }]);

        return App;
      }());

      _export('App', App);
    }
  };
});
System.register("aurelia-onsenui-kitchensink/environment.js", [], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        debug: true,
        testing: true
      });
    }
  };
});
System.register('aurelia-onsenui-kitchensink/main.js', ['aurelia-binding', 'aurelia-bootstrapper', 'aurelia-event-aggregator', 'aurelia-framework', 'aurelia-dependency-injection', 'aurelia-history-browser', 'aurelia-loader', 'aurelia-loader-default', 'aurelia-logging-console', 'aurelia-metadata', 'aurelia-pal-browser', 'aurelia-path', 'aurelia-polyfills', 'aurelia-route-recognizer', 'aurelia-router', 'aurelia-templating', 'aurelia-templating-binding', 'aurelia-templating-resources', 'aurelia-templating-router', 'aurelia-onsenui', 'text'], function (_export, _context) {
  "use strict";

  function configure(aurelia) {
    aurelia.use.basicConfiguration().history().plugin('aurelia-onsenui');

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }

  _export('configure', configure);

  return {
    setters: [function (_aureliaBinding) {}, function (_aureliaBootstrapper) {}, function (_aureliaEventAggregator) {}, function (_aureliaFramework) {}, function (_aureliaDependencyInjection) {}, function (_aureliaHistoryBrowser) {}, function (_aureliaLoader) {}, function (_aureliaLoaderDefault) {}, function (_aureliaLoggingConsole) {}, function (_aureliaMetadata) {}, function (_aureliaPalBrowser) {}, function (_aureliaPath) {}, function (_aureliaPolyfills) {}, function (_aureliaRouteRecognizer) {}, function (_aureliaRouter) {}, function (_aureliaTemplating) {}, function (_aureliaTemplatingBinding) {}, function (_aureliaTemplatingResources) {}, function (_aureliaTemplatingRouter) {}, function (_aureliaOnsenui) {}, function (_text) {}],
    execute: function () {}
  };
});
System.register("aurelia-onsenui-kitchensink/pages/forms.html!node_modules/systemjs-plugin-text/text.js", [], function (_export, _context) {
  "use strict";

  var __useDefault;

  return {
    setters: [],
    execute: function () {
      _export("__useDefault", __useDefault = true);

      _export("__useDefault", __useDefault);

      _export("default", "<template>\n  <ons-page>\n    <ons-toolbar>\n      <div class=\"left\"><ons-back-button>Back</ons-back-button></div>\n      <div class=\"center\">${title}</div>\n    </ons-toolbar>\n    <ons-list>\n      <ons-list-header>Text input</ons-list-header>\n      <ons-list-item modifier=\"nodivider\">\n        <label class=\"left\" for=\"name\">\n          <ons-icon icon=\"md-face\" class=\"list-item__icon\"</ons-icon>\n        </label>\n        <div class=\"center\">\n          <ons-input type=\"text\" value.bind=\"name\" placeholder=\"What's your name?\" modifier=\"\" float input-id=\"name\"></ons-input>\n        </div>\n      </ons-list-item>\n      <ons-list-item modifier=\"nodivider\">\n        <div class=\"right\" style=\"color:#666\">\n          Hello ${name || 'anonymous'}! <ons-icon icon=\"fa-hand-spock-o\" size=\"lg\" style=\"margin-left:10px;\"></ons-icon>\n        </div>\n      </ons-list-item>\n      <ons-list-header>Switches</ons-list-header>\n      <ons-list-item>\n        <label class=\"center\" for=\"switch1\">\n          Switch (${switch1 ? 'on' : 'off'})\n        </label>\n        <div class=\"right\">\n          <ons-switch input-id=\"switch1\" value.bind=\"switch1\"></ons-switch>\n        </div>\n      </ons-list-item>\n      <ons-list-item>\n        <label class=\"center\" for=\"switch2\" style=\"${switch1 ? '' : 'opacity:0.5;'}\">\n          ${switch1 ? 'Switch enabled' : 'Switch disabled'} (${switch2 ? 'on' : 'off'})\n        </label>\n        <div class=\"right\">\n          <ons-switch input-id=\"switch2\" value.bind=\"switch2\" disabled.bind=\"!switch1\"></ons-switch>\n        </div>\n      </ons-list-item>\n      <ons-list-header>Select</ons-list-header>\n      <ons-list-item>\n        <div class=\"center\">\n          <ons-select style=\"width: 100px\" value.bind=\"selectedOption\">\n            <option repeat.for=\"option of options\" value.bind=\"option.value\">\n              ${option.name}\n            </option>\n          </ons-select>\n        </div>\n        <div class=\"right\" style=\"color:#666\">\n          ${selectedOption} is awesome!\n        </div>\n      </ons-list-item>\n      <ons-list-header>Radio buttons</ons-list-header>\n      <ons-list-item repeat.for=\"vegetable of vegetables\" tappable>\n        <label class=\"left\">\n          <ons-input type=\"radio\" name=\"vegetables\" input-id=\"radio-${$index}\" value.bind=\"vegetable\" checked.bind=\"selectedVegetable\" disabled.bind=\"vegetable === 'Chocolate' ? 'disabled' : ''\"></ons-input>\n        </label>\n        <label for=\"radio-${$index}\" class=\"center\" style=\"${vegetable === 'Chocolate' ? 'opacity:0.5;' : ''}\">\n          ${vegetable}\n        </label>\n      </ons-list-item>\n      <ons-list-item>\n        <div class=\"center\">\n          I love ${selectedVegetable}!\n        </div>\n      </ons-list-item>\n      <ons-list-header>Checkboxes - [${checkedColors}]</ons-list-header>\n      <ons-list-item repeat.for=\"color of colors\" tappable>\n        <label class=\"left\">\n          <ons-input type=\"checkbox\" name=\"colors\" input-id=\"checkbox-${$index}\" value.bind=\"color\" checked.bind=\"checkedColors\" disabled.bind=\"color === 'Blue' ? true : false\"></ons-input>\n        </label>\n        <label for=\"checkbox-${$index}\" class=\"center\" style=\"${color === 'Blue' ? 'opacity:0.5;' : ''}\">\n          ${color}\n        </label>\n      </ons-list-item>\n      <ons-list-header>Range slider</ons-list-header>\n      <ons-list-item>\n        Adjust the volume:\n        <ons-row>\n          <ons-col width=\"40px\" style=\"text-align: center; line-height: 31px;\">\n            <ons-icon icon=\"md-volume-down\"></ons-icon>\n          </ons-col>\n          <ons-col>\n\n            <ons-range value.bind=\"volume\" style=\"width: 100%;\"></ons-range>\n\n          </ons-col>\n          <ons-col width=\"40px\" style=\"text-align: center; line-height: 31px;\">\n            <ons-icon icon=\"md-volume-up\"></ons-icon>\n          </ons-col>\n        </ons-row>\n        <ons-row>\n          <ons-col width=\"30%\">Volume: ${volume}</ons-col>\n          <ons-col style=\"text-align:center;\"><span show.bind=\"volume > 80\">(be careful, that's loud)</span></ons-col>\n        </ons-row>\n      </ons-list-item>\n    </ons-list>\n  </ons-page>\n</template>\n");
    }
  };
});
System.register('aurelia-onsenui-kitchensink/pages/forms.js', ['node_modules/systemjs-plugin-babel/babel-helpers/classCallCheck.js', 'node_modules/systemjs-plugin-babel/babel-helpers/createClass.js', 'aurelia-router', 'aurelia-framework'], function (_export, _context) {
  "use strict";

  var _classCallCheck, _createClass, Router, inject, _dec, _class, Forms;

  return {
    setters: [function (_node_modulesSystemjsPluginBabelBabelHelpersClassCallCheckJs) {
      _classCallCheck = _node_modulesSystemjsPluginBabelBabelHelpersClassCallCheckJs.default;
    }, function (_node_modulesSystemjsPluginBabelBabelHelpersCreateClassJs) {
      _createClass = _node_modulesSystemjsPluginBabelBabelHelpersCreateClassJs.default;
    }, function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }],
    execute: function () {
      _export('Forms', Forms = (_dec = inject(Router), _dec(_class = function () {
        function Forms(router) {
          _classCallCheck(this, Forms);

          this.router = router;
          this.name = "";
          this.switch1 = true;
          this.switch2 = false;
          this.options = [{
            value: 'aurelia',
            name: 'Aurelia'
          }, {
            value: 'vue',
            name: 'Vue'
          }, {
            value: 'react',
            name: 'React'
          }, {
            value: 'angular',
            name: 'Angular'
          }];
          this.selectedOption = 'aurelia';
          this.vegetables = ['Apples', 'Bananas', 'Oranges', 'Chocolate'];
          this.selectedVegetable = 'Bananas';
          this.colors = ['Red', 'Green', 'Blue', 'Yellow'];
          this.checkedColors = ['Green', 'Blue'];
          this.volume = 25;
        }

        _createClass(Forms, [{
          key: 'activate',
          value: function activate(params, routeConfig, navigationInstruction) {
            this.title = routeConfig.title;
          }
        }]);

        return Forms;
      }()) || _class));

      _export('Forms', Forms);
    }
  };
});
System.register("aurelia-onsenui-kitchensink/pages/home.html!node_modules/systemjs-plugin-text/text.js", [], function (_export, _context) {
  "use strict";

  var __useDefault;

  return {
    setters: [],
    execute: function () {
      _export("__useDefault", __useDefault = true);

      _export("__useDefault", __useDefault);

      _export("default", "<template>\n  <ons-page>\n    <ons-toolbar>\n      <div class=\"center\">${router.title}</div>\n    </ons-toolbar>\n    <ons-list>\n      <ons-list-item repeat.for=\"item of router.navigation\" modifier=\"chevron\" tappable click.trigger=\"itemClick(item)\">\n        ${item.title}\n      </ons-list-item>\n    </ons-list>\n  </ons-page>\n</template>\n");
    }
  };
});
System.register('aurelia-onsenui-kitchensink/pages/home.js', ['node_modules/systemjs-plugin-babel/babel-helpers/classCallCheck.js', 'node_modules/systemjs-plugin-babel/babel-helpers/createClass.js', 'aurelia-framework', 'aurelia-router'], function (_export, _context) {
  "use strict";

  var _classCallCheck, _createClass, inject, Router, _dec, _class, Home;

  return {
    setters: [function (_node_modulesSystemjsPluginBabelBabelHelpersClassCallCheckJs) {
      _classCallCheck = _node_modulesSystemjsPluginBabelBabelHelpersClassCallCheckJs.default;
    }, function (_node_modulesSystemjsPluginBabelBabelHelpersCreateClassJs) {
      _createClass = _node_modulesSystemjsPluginBabelBabelHelpersCreateClassJs.default;
    }, function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      _export('Home', Home = (_dec = inject(Router), _dec(_class = function () {
        function Home(router) {
          _classCallCheck(this, Home);

          this.router = router;
        }

        _createClass(Home, [{
          key: 'itemClick',
          value: function itemClick(item) {
            this.router.navigate(item.href);
          }
        }]);

        return Home;
      }()) || _class));

      _export('Home', Home);
    }
  };
});
System.register("aurelia-onsenui-kitchensink/pages/navigation/index.html!node_modules/systemjs-plugin-text/text.js", [], function (_export, _context) {
  "use strict";

  var __useDefault;

  return {
    setters: [],
    execute: function () {
      _export("__useDefault", __useDefault = true);

      _export("__useDefault", __useDefault);

      _export("default", "<template>\n  <ons-page>\n    <ons-toolbar>\n      <div class=\"left\">\n        <ons-back-button>Back</ons-back-button>\n      </div>\n      <div class=\"center\">\n        ${title}\n      </div>\n    </ons-toolbar>\n    <ons-list>\n      <ons-list-header>Platfrom based transitions</ons-list-header>\n      <ons-list-item repeat.for=\"item of animations\" modifier=\"chevron\" tappable click.trigger=\"pushPage(item)\">\n        ${item.name}\n      </ons-list-item>\n      <ons-list-header>iOS specific transitions</ons-list-header>\n      <ons-list-item repeat.for=\"item of animationsIOS\" modifier=\"chevron\" tappable click.trigger=\"pushPage(item)\">\n        ${item.name}\n      </ons-list-item>\n      <ons-list-header>Material specific transitions</ons-list-header>\n      <ons-list-item repeat.for=\"item of animationsMaterial\" modifier=\"chevron\" tappable click.trigger=\"pushPage(item)\">\n        ${item.name}\n      </ons-list-item>\n    </ons-list>\n  </ons-page>\n</template>\n");
    }
  };
});
System.register('aurelia-onsenui-kitchensink/pages/navigation/index.js', ['node_modules/systemjs-plugin-babel/babel-helpers/classCallCheck.js', 'node_modules/systemjs-plugin-babel/babel-helpers/createClass.js', 'aurelia-framework', 'aurelia-router'], function (_export, _context) {
  "use strict";

  var _classCallCheck, _createClass, inject, Router, _dec, _class, Index;

  return {
    setters: [function (_node_modulesSystemjsPluginBabelBabelHelpersClassCallCheckJs) {
      _classCallCheck = _node_modulesSystemjsPluginBabelBabelHelpersClassCallCheckJs.default;
    }, function (_node_modulesSystemjsPluginBabelBabelHelpersCreateClassJs) {
      _createClass = _node_modulesSystemjsPluginBabelBabelHelpersCreateClassJs.default;
    }, function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      _export('Index', Index = (_dec = inject(Router), _dec(_class = function () {
        function Index(router) {
          _classCallCheck(this, Index);

          this.router = router;
          this.animations = [{
            name: 'Default',
            value: 'default'
          }, {
            name: 'None',
            value: 'none'
          }, {
            name: 'Lift',
            value: 'lift'
          }, {
            name: 'Slide',
            value: 'slide'
          }, {
            name: 'Fade',
            value: 'fade'
          }];
          this.animationsIOS = [{
            name: 'Lift',
            value: 'lift-ios'
          }, {
            name: 'Slide',
            value: 'slide-ios'
          }, {
            name: 'Fade',
            value: 'fade-ios'
          }];
          this.animationsMaterial = [{
            name: 'Lift',
            value: 'lift-md'
          }, {
            name: 'Slide',
            value: 'slide-md'
          }, {
            name: 'Fade',
            value: 'fade-md'
          }];
        }

        _createClass(Index, [{
          key: 'activate',
          value: function activate(params, routeConfig) {
            this.title = routeConfig.title;
          }
        }, {
          key: 'pushPage',
          value: function pushPage(item) {
            var routeName = 'navigation-page';
            var config = this.router.routes.find(function (route) {
              return route.name === routeName;
            });
            config.settings.navigator.animation = item.value;
            this.router.navigateToRoute(routeName);
          }
        }]);

        return Index;
      }()) || _class));

      _export('Index', Index);
    }
  };
});
System.register("aurelia-onsenui-kitchensink/pages/navigation/page.html!node_modules/systemjs-plugin-text/text.js", [], function (_export, _context) {
  "use strict";

  var __useDefault;

  return {
    setters: [],
    execute: function () {
      _export("__useDefault", __useDefault = true);

      _export("__useDefault", __useDefault);

      _export("default", "<template>\n  <ons-page>\n    <ons-toolbar>\n      <div class=\"left\">\n        <ons-back-button>Back</ons-back-button>\n      </div>\n      <div class=\"center\">\n        ${title}\n      </div>\n    </ons-toolbar>\n    <div style=\"padding:0 12px;text-align:center;\">\n      <p style=\"\">\n        Navigation page\n      </p>\n      <ons-button click.trigger=\"popPage()\">Go back</ons-button>\n    </div>\n  </ons-page>\n</template>\n");
    }
  };
});
System.register('aurelia-onsenui-kitchensink/pages/navigation/page.js', ['node_modules/systemjs-plugin-babel/babel-helpers/classCallCheck.js', 'node_modules/systemjs-plugin-babel/babel-helpers/createClass.js', 'aurelia-framework', 'aurelia-router'], function (_export, _context) {
  "use strict";

  var _classCallCheck, _createClass, inject, Router, _dec, _class, Page;

  return {
    setters: [function (_node_modulesSystemjsPluginBabelBabelHelpersClassCallCheckJs) {
      _classCallCheck = _node_modulesSystemjsPluginBabelBabelHelpersClassCallCheckJs.default;
    }, function (_node_modulesSystemjsPluginBabelBabelHelpersCreateClassJs) {
      _createClass = _node_modulesSystemjsPluginBabelBabelHelpersCreateClassJs.default;
    }, function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      _export('Page', Page = (_dec = inject(Router), _dec(_class = function () {
        function Page(router) {
          _classCallCheck(this, Page);

          this.router = router;
          this.title = 'Page';
        }

        _createClass(Page, [{
          key: 'popPage',
          value: function popPage() {
            this.router.navigateBack();
          }
        }]);

        return Page;
      }()) || _class));

      _export('Page', Page);
    }
  };
});
System.register("aurelia-onsenui-kitchensink/pages/tabs/index.html!node_modules/systemjs-plugin-text/text.js", [], function (_export, _context) {
  "use strict";

  var __useDefault;

  return {
    setters: [],
    execute: function () {
      _export("__useDefault", __useDefault = true);

      _export("__useDefault", __useDefault);

      _export("default", "<template>\n  <ons-page>\n    <ons-toolbar>\n      <div class=\"left\">\n        <ons-back-button>Back</ons-back-button>\n      </div>\n      <div class=\"center\">\n        ${title}\n      </div>\n    </ons-toolbar>\n    <ons-tabbar>\n      <ons-tab repeat.for=\"tab of tabs\" model.bind=\"tab\"></ons-tab>\n    </ons-tabbar>\n  </ons-page>\n</template>\n");
    }
  };
});
System.register('aurelia-onsenui-kitchensink/pages/tabs/index.js', ['node_modules/systemjs-plugin-babel/babel-helpers/classCallCheck.js', 'node_modules/systemjs-plugin-babel/babel-helpers/createClass.js'], function (_export, _context) {
  "use strict";

  var _classCallCheck, _createClass, Index;

  return {
    setters: [function (_node_modulesSystemjsPluginBabelBabelHelpersClassCallCheckJs) {
      _classCallCheck = _node_modulesSystemjsPluginBabelBabelHelpersClassCallCheckJs.default;
    }, function (_node_modulesSystemjsPluginBabelBabelHelpersCreateClassJs) {
      _createClass = _node_modulesSystemjsPluginBabelBabelHelpersCreateClassJs.default;
    }],
    execute: function () {
      _export('Index', Index = function () {
        function Index() {
          _classCallCheck(this, Index);

          this.tabs = [{
            page: './tab-1',
            active: true,
            label: 'Tab 1',
            icon: 'fa-calendar-o',
            'active-icon': 'fa-calendar'
          }, {
            page: './tab-2',
            label: 'Tab 2',
            icon: 'fa-bookmark-o',
            'active-icon': 'fa-bookmark'
          }, {
            page: './tab-3',
            label: 'Tab 3',
            icon: 'fa-bell-o',
            'active-icon': 'fa-bell',
            badge: 3
          }];
        }

        _createClass(Index, [{
          key: 'activate',
          value: function activate(params, routeConfig) {
            this.title = routeConfig.title;
          }
        }]);

        return Index;
      }());

      _export('Index', Index);
    }
  };
});
System.register("aurelia-onsenui-kitchensink/pages/tabs/tab-1.html!node_modules/systemjs-plugin-text/text.js", [], function (_export, _context) {
  "use strict";

  var __useDefault;

  return {
    setters: [],
    execute: function () {
      _export("__useDefault", __useDefault = true);

      _export("__useDefault", __useDefault);

      _export("default", "<template>\n  <ons-page>\n    <div style=\"text-align:center;margin:8px\">This is ${title}.</div>\n  </ons-page>\n</template>\n");
    }
  };
});
System.register("aurelia-onsenui-kitchensink/pages/tabs/tab-1.js", ["node_modules/systemjs-plugin-babel/babel-helpers/classCallCheck.js", "node_modules/systemjs-plugin-babel/babel-helpers/createClass.js"], function (_export, _context) {
  "use strict";

  var _classCallCheck, _createClass, Tab1;

  return {
    setters: [function (_node_modulesSystemjsPluginBabelBabelHelpersClassCallCheckJs) {
      _classCallCheck = _node_modulesSystemjsPluginBabelBabelHelpersClassCallCheckJs.default;
    }, function (_node_modulesSystemjsPluginBabelBabelHelpersCreateClassJs) {
      _createClass = _node_modulesSystemjsPluginBabelBabelHelpersCreateClassJs.default;
    }],
    execute: function () {
      _export("Tab1", Tab1 = function () {
        function Tab1() {
          _classCallCheck(this, Tab1);
        }

        _createClass(Tab1, [{
          key: "activate",
          value: function activate(model) {
            this.title = model.label;
          }
        }]);

        return Tab1;
      }());

      _export("Tab1", Tab1);
    }
  };
});
System.register("aurelia-onsenui-kitchensink/pages/tabs/tab-2.html!node_modules/systemjs-plugin-text/text.js", [], function (_export, _context) {
  "use strict";

  var __useDefault;

  return {
    setters: [],
    execute: function () {
      _export("__useDefault", __useDefault = true);

      _export("__useDefault", __useDefault);

      _export("default", "<template>\n  <ons-page>\n    <div style=\"text-align:center;margin:8px\">This is ${title}.</div>\n  </ons-page>\n</template>\n");
    }
  };
});
System.register("aurelia-onsenui-kitchensink/pages/tabs/tab-2.js", ["node_modules/systemjs-plugin-babel/babel-helpers/classCallCheck.js", "node_modules/systemjs-plugin-babel/babel-helpers/createClass.js"], function (_export, _context) {
  "use strict";

  var _classCallCheck, _createClass, Tab2;

  return {
    setters: [function (_node_modulesSystemjsPluginBabelBabelHelpersClassCallCheckJs) {
      _classCallCheck = _node_modulesSystemjsPluginBabelBabelHelpersClassCallCheckJs.default;
    }, function (_node_modulesSystemjsPluginBabelBabelHelpersCreateClassJs) {
      _createClass = _node_modulesSystemjsPluginBabelBabelHelpersCreateClassJs.default;
    }],
    execute: function () {
      _export("Tab2", Tab2 = function () {
        function Tab2() {
          _classCallCheck(this, Tab2);
        }

        _createClass(Tab2, [{
          key: "activate",
          value: function activate(model) {
            this.title = model.label;
          }
        }]);

        return Tab2;
      }());

      _export("Tab2", Tab2);
    }
  };
});
System.register("aurelia-onsenui-kitchensink/pages/tabs/tab-3.html!node_modules/systemjs-plugin-text/text.js", [], function (_export, _context) {
  "use strict";

  var __useDefault;

  return {
    setters: [],
    execute: function () {
      _export("__useDefault", __useDefault = true);

      _export("__useDefault", __useDefault);

      _export("default", "<template>\n  <ons-page>\n    <div style=\"text-align:center;margin:8px\">This is ${title}.</div>\n  </ons-page>\n</template>\n");
    }
  };
});
System.register("aurelia-onsenui-kitchensink/pages/tabs/tab-3.js", ["node_modules/systemjs-plugin-babel/babel-helpers/classCallCheck.js", "node_modules/systemjs-plugin-babel/babel-helpers/createClass.js"], function (_export, _context) {
  "use strict";

  var _classCallCheck, _createClass, Tab3;

  return {
    setters: [function (_node_modulesSystemjsPluginBabelBabelHelpersClassCallCheckJs) {
      _classCallCheck = _node_modulesSystemjsPluginBabelBabelHelpersClassCallCheckJs.default;
    }, function (_node_modulesSystemjsPluginBabelBabelHelpersCreateClassJs) {
      _createClass = _node_modulesSystemjsPluginBabelBabelHelpersCreateClassJs.default;
    }],
    execute: function () {
      _export("Tab3", Tab3 = function () {
        function Tab3() {
          _classCallCheck(this, Tab3);
        }

        _createClass(Tab3, [{
          key: "activate",
          value: function activate(model) {
            this.title = model.label;
          }
        }]);

        return Tab3;
      }());

      _export("Tab3", Tab3);
    }
  };
});
//# sourceMappingURL=app-bundle.js.map