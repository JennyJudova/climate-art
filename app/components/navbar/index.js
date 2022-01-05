import Component from '@glimmer/component';
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";


export default class NavbarComponent extends Component {
  @tracked
  isChecked = false;

  @action
  onCheck() {
    this.isChecked = !this.isChecked;
    return this.isChecked
  }
}
