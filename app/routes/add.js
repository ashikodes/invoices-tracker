import Route from '@ember/routing/route';

export default class AddRoute extends Route {
  model() {
    return this.store.createRecord('invoice', {
      dateSold: '',
    });
  }
}
