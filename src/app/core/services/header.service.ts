import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  constructor() {}

  titulo = signal('Título');
  extendido: WritableSignal<boolean> = signal(false);
}
