import { Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.scss']
})
export class ErrorDialogComponent {

  @Input() error: string;

  constructor(
    private ref: NbDialogRef<ErrorDialogComponent>
  ) {
  }

  dismiss() {
    this.ref.close();
  }

}
