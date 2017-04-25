export class App {

  configureRouter(config, router) {
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
}
