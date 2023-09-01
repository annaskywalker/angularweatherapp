import { Component, Output, EventEmitter } from '@angular/core';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-resetlocation',
  templateUrl: './resetlocation.component.html',
  styleUrls: ['./resetlocation.component.css'],
})
export class ResetlocationComponent {
  faMapPin = faMapPin;
  @Output()
  onReset: EventEmitter<string> = new EventEmitter();

  reset() {
    this.onReset.emit();
  }
}
