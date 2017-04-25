import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)

export class Page {

  constructor(router) {
    this.router = router;
    this.title = 'Page';
  }

  popPage() {
    this.router.navigateBack();
  }
}
