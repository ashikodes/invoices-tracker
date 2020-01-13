import Route from '@ember/routing/route';

export default class AddRoute extends Route {
  model() {
    return {
      id: 2,
      title: 'two',
      amount: '',
      dateSold: ''
    }
  }
}
