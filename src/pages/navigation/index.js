import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export class Index {

  constructor(router) {
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

  activate(params, routeConfig) {
    this.title = routeConfig.title;
  }

  pushPage(item) {
    let routeName = 'navigation-page';
    let config = this.router.routes.find((route) => route.name === routeName);
    config.settings.navigator.animation = item.value;
    this.router.navigateToRoute(routeName);
  }
}
