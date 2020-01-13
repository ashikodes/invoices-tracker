import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  model() {
    return [
      { id: 1, title: 'one', amount: 123, dateSold: '2019-11-11' }
    ]
  }
}
