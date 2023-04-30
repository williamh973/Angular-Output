import { Component } from '@angular/core';


@Component({
  selector: 'app-create-onomatopoeia',
  templateUrl: './create-onomatopoeia.component.html',
  styleUrls: ['./create-onomatopoeia.component.scss']
})
export class CreateOnomatopoeiaComponent {

  onomatopoeiaList: string[] = [];

  onReceiveNewOnomatopia(newOnomatopia: string) {
    this.onomatopoeiaList.push(newOnomatopia);
  }
}
