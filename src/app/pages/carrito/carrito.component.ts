import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { HeaderService } from 'src/app/core/services/header.service';
import { ContadorCantidadComponent } from "../../core/components/contador-cantidad/contador-cantidad.component";

@Component({
    selector: 'app-carrito',
    templateUrl: './carrito.component.html',
    styleUrls: ['./carrito.component.scss'],
    standalone: true,
    imports: [CommonModule, ContadorCantidadComponent]
})
export class CarritoComponent {
  headerService = inject(HeaderService);
  cartService = inject(CartService);
  ngOnInit(): void {
    this.headerService.titulo.set('Carrito');
  }

  eliminarProducto(idProducto: number){
    this.cartService.eliminarProducto(idProducto);
  }
}
