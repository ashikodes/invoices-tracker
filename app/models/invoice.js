import DS from 'ember-data';
const { Model, attr } = DS;

export default class InvoiceModel extends Model {
  @attr('string') title;
  @attr('number') amount;
  @attr('string') dateSold;
}
