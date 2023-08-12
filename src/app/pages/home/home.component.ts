import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { HeaderService } from 'src/app/core/services/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  headerService = inject(HeaderService);

  ngOnInit(): void {
    this.headerService.titulo.set("Home")
    this.headerService.extendido.set(true);
  }

  ngOnDestroy(): void {
    this.headerService.extendido.set(false);
  }

}
