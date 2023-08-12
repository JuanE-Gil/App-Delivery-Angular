import { Component, inject } from '@angular/core';
import { HeaderService } from 'src/app/core/services/header.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss'],
})
export class CarritoComponent {
  headerService = inject(HeaderService);

  ngOnInit(): void {
    this.headerService.titulo.set('Carrito');
  }
}
