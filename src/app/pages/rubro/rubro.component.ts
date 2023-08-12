import { Component, inject } from '@angular/core';
import { HeaderService } from 'src/app/core/services/header.service';

@Component({
  selector: 'app-rubro',
  templateUrl: './rubro.component.html',
  styleUrls: ['./rubro.component.scss'],
})
export class RubroComponent {
  headerService = inject(HeaderService);

  ngOnInit(): void {
    this.headerService.titulo.set('Rubro');
  }
}
