import {Router} from 'aurelia-router';
import {inject} from 'aurelia-framework';

@inject(Router)
export class Forms {

  constructor(router) {
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
    this.vegetables =['Apples', 'Bananas', 'Oranges', 'Chocolate'];
    this.selectedVegetable = 'Bananas';
    this.colors = ['Red', 'Green', 'Blue', 'Yellow'];
    this.checkedColors = ['Green', 'Blue'];
    this.volume = 25;
  }

  activate(params, routeConfig, navigationInstruction) {
    this.title = routeConfig.title;
  }
}
