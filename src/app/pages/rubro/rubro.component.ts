import { Component, WritableSignal, inject, signal } from '@angular/core';
import { HeaderService } from 'src/app/core/services/header.service';
import { ProductosService } from '../../core/services/productos.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Producto } from 'src/app/core/interfaces/productos';
import { TarjetaProductoComponent } from 'src/app/core/components/tarjeta-producto/tarjeta-producto.component';
import { CommonModule } from '@angular/common';
import { CategoriasService } from 'src/app/core/services/categorias.service';

@Component({
  selector: 'app-rubro',
  templateUrl: './rubro.component.html',
  styleUrls: ['./rubro.component.scss'],
  standalone: true,
  imports: [TarjetaProductoComponent, CommonModule, RouterModule],
})

export class RubroComponent {
  headerService = inject(HeaderService);
  categoriasService = inject(CategoriasService);
  ac = inject(ActivatedRoute);
  productos:WritableSignal<Producto[]> = signal([]);

  ngOnInit(): void {
    this.ac.params.subscribe((params) => {
      if (params['id']) {
        this.categoriasService
          .getById(parseInt(params['id']))
          .then((categoria) => {
            if (categoria) {
              this.productos.set(categoria.productos);
              this.headerService.titulo.set(categoria.nombre);
            }
          });
      }
    });
  }
}
