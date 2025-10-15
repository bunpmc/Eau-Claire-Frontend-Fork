import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface Toast {
    message: string;
    type: 'success' | 'error';
}

@Injectable({ providedIn: 'root' })
export class UiService {
    private toastSubject = new BehaviorSubject<Toast | null>(null);
    toast$ = this.toastSubject.asObservable();

    showToast(message: string, type: 'success' | 'error') {
        this.toastSubject.next({ message, type });
        setTimeout(() => this.toastSubject.next(null), 3000);
    }
}