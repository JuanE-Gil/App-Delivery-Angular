import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-contador-cantidad',
  templateUrl: './contador-cantidad.component.html',
  styleUrls: ['./contador-cantidad.component.scss'],
  standalone: true,
})
export class ContadorCantidadComponent implements OnInit {

  ngOnInit(): void {
    this.numero.set(this.CantidadInicial);
  }

  numero = signal(1);

  @Output() cantidadCambiada = new EventEmitter<number>();
  @Input() CantidadInicial = 1;
  actualizarNumero(diferencia: number) {
    this.numero.set(Math.max(this.numero() + diferencia, 1));
    this.cantidadCambiada.emit(this.numero());
  }
}
