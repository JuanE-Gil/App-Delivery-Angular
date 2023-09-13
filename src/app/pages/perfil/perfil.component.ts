import { Component, inject } from '@angular/core';
import { HeaderService } from 'src/app/core/services/header.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Perfil } from 'src/app/core/interfaces/perfil';
import { PerfilService } from 'src/app/core/services/perfil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class PerfilComponent {
  headerService = inject(HeaderService);
  perfilService = inject(PerfilService);
  router = inject(Router);

  ngOnInit(): void {
    this.headerService.titulo.set('Perfil');
    if (this.perfilService.perfil()) {
      this.perfil = { ...this.perfilService.perfil()! };
    }
  }

  perfil: Perfil = {
    nombre: '',
    direccion: '',
    detalleEntrega: '',
    telefono: '',
  };

  guardarDatosPerfil() {
    this.perfilService.guardarDatos(this.perfil);
    this.router.navigate(['/carrito']);
  }
}
