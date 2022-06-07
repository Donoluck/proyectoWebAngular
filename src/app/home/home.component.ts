import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {

  title = 'ng-carousel-demo';

  images = [
    {title: 'Torneo Regional de Ping Pong', short: 'Primera Imagen', src: "../../assets/carousel_6.png"},
    {title: 'Frontis', short: 'Segunda Imagen', src: "../../assets/imagen_prueba.png"},
    {title: 'Campeonato de Baby Futbol', short: 'Tercera Imagen', src: "../../assets/carousel_3.png"}
  ];

  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
  }

}
