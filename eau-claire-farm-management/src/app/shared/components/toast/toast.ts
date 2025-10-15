import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiService } from '../../services/ui.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-toast',
  imports: [CommonModule],
  templateUrl: './toast.html',
  styleUrls: ['./toast.css'],
  template: `
  <div class="toast" [ngClass]="toast?.type" *ngIf="toast$ | async as toast">
      {{ toast.message }}
    </div>
    `,
  styles: [`
      .toast {
      position: fixed;
      bottom: 20px;
      right: 20px;
      padding: 10px 20px;
      border-radius: 5px;
    }
    .success { background: #28a745; color: white; }
    .error { background: #dc3545; color: white; }
    `]
})
export class Toast {
  toast$: Observable<any>;

  constructor(private ui: UiService) {
    this.toast$ = this.ui.toast$;
  }
}
