import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  constructor() {}

  titulo = signal('');
  extendido: WritableSignal<boolean> = signal(false);
}
