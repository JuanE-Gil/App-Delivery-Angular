import { Component, effect, inject, signal } from '@angular/core';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  headerService = inject(HeaderService);
  claseAplicada = signal('');
  tituloMostrado = signal('');

  esconderTitulo = effect(
    () => {
      if (this.headerService.titulo()) {
        console.log('ESCONDER');
        this.claseAplicada.set('fade-out');
      }
    },
    { allowSignalWrites: true }
  );

  mostrarTituloNuevo(e: AnimationEvent) {
    console.log(e.animationName.includes('fade-out'));
    if (e.animationName.includes('fade-out')) {
      console.log('MOSTRAR');
      this.tituloMostrado.set(this.headerService.titulo());
      this.claseAplicada.set('fade-in');
      setTimeout(() => this.claseAplicada.set(''), 250);
    }
  }
}
