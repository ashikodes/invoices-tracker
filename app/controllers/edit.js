import Controller from '@ember/controller';
import { action } from "@ember/object";

export default class EditController extends Controller {
  @action
  transitionRoute(name) {
    this.transitionToRoute(name);
  }
}
