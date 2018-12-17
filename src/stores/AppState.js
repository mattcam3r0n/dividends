import { observable, action } from 'mobx';

export default class AppState {
  @observable authenticated;
  @observable authenticating;
  @observable sidebarOpen;

  constructor() {
    this.authenticated = false;
    this.authenticating = false;
    this.sidebarOpen = false;
  }

  @action.bound closeSidebar() {
      this.sidebarOpen = false;
  }

  @action.bound openSidebar() {
      this.sidebarOpen = true;
  }

  //   async fetchData(pathname, id) {
  //     let { data } = await axios.get(
  //       `https://jsonplaceholder.typicode.com${pathname}`
  //     );
  //     console.log(data);
  //     data.length > 0 ? this.setData(data) : this.setSingle(data);
  //   }

  //   @action setData(data) {
  //     this.items = data;
  //   }

  //   @action setSingle(data) {
  //     this.item = data;
  //   }

  //   @action clearItems() {
  //     this.items = [];
  //     this.item = {};
  //   }

  //   @action authenticate() {
  //     return new Promise((resolve, reject) => {
  //       this.authenticating = true;
  //       setTimeout(() => {
  //         this.authenticated = !this.authenticated;
  //         this.authenticating = false;
  //         resolve(this.authenticated);
  //       }, 0);
  //     });
  //   }
}
