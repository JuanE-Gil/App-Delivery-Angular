import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Busqueda } from 'src/app/core/interfaces/busqueda';
import { HeaderService } from 'src/app/core/services/header.service';
import { ProductosService } from 'src/app/core/services/productos.service';
import { TarjetaProductoComponent } from "../../core/components/tarjeta-producto/tarjeta-producto.component";
import { Producto } from 'src/app/core/interfaces/productos';

@Component({
    selector: 'app-buscar',
    templateUrl: './buscar.component.html',
    styleUrls: ['./buscar.component.scss'],
    standalone: true,
    imports: [CommonModule, FormsModule, TarjetaProductoComponent]
})
export class BuscarComponent {
  headerService = inject(HeaderService);
  productosService = inject(ProductosService)
  productos:Producto[] = [];

  ngOnInit(): void {
    this.headerService.titulo.set('Buscar');
    this.productosService.getAll().then(res => this.productos = res)
  }

  parametrosBusqueda: Busqueda = {
    texto: '',
    aptoCeliaco: false,
    aptoVegano: false,
  };

  async buscar() {
    this.productos = await this.productosService.buscar(this.parametrosBusqueda);
  }
}
