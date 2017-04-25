export class Index {
  constructor() {
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
    }]
  }

  activate(params, routeConfig) {
    this.title = routeConfig.title;
  }

}
