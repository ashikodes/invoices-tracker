import Route from '@ember/routing/route';

export default class EditRoute extends Route {
  model(params) {
    return this.store.findRecord('invoice', params.id)
  }
}
