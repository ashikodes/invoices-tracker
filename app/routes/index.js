import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  queryParams = {
    dateFilter: {
      refreshModel: true
    }
  }

  model(params) {
    const filter = {};
    if (params.dateFilter) {
      filter.dateSold = params.dateFilter;
    }
    return this.store.query('invoice', { filter });
  }
}
