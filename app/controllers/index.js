import Controller from '@ember/controller';
import { action } from "@ember/object";

export default class IndexController extends Controller {
  queryParams = ['dateFilter']
  dateFilter = ''

  @action
  changeDate(date) {
    this.set('dateFilter', date[0].toLocaleDateString().replace(/\//g, '-'));
  }

  @action
  deleteInvoice(invoice) {
    invoice.destroyRecord();
  }

  @action
  clearFilter() {
    this.set('dateFilter', '');
  }
}
