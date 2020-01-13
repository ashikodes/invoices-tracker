import Component from '@glimmer/component';
import { action } from "@ember/object";

export default class InvoiceFormComponent extends Component {
  
  @action
  addInvoice(event) {
    event.preventDefault();
    this.args.invoice.save();
    this.args.transitionTo('index');
  }

  @action
  changeDate(date) {
    this.args.invoice.set('dateSold', date[0].toLocaleDateString().replace(/\//g, '-'));
  }
}
