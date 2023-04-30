import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  newOnomatopia: string = '';
  @Output() sendOnomatopiaToParent = new EventEmitter<string>();

  createOnomatopia() {
    this.sendOnomatopiaToParent.emit(this.newOnomatopia);
    this.newOnomatopia = '';
  } 
}
