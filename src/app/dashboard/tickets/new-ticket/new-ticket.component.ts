import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  enteredTitle = '';
  enteredText = '';
  add = output<{title: string; text: string}>();

  onSubmit() {
    this.add.emit({ title: this.enteredTitle, text: this.enteredText });
    // reset field values.
    this.enteredTitle = '';
    this.enteredText = '';
  }
}