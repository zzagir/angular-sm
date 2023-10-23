import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent implements OnInit {
  constructor() {}

  name: string;
  speed: number;
  model: string;
  colors: IColors;
  options: string[];
  isEdit: boolean = false;

  ngOnInit() {
    this.name = 'BMW';
    this.speed = 280;
    this.model = 'M5';
    this.colors = {
      car: 'Blue',
      salon: 'White',
      wheels: 'Black',
    };
    this.options = ['Sport+', 'Navigator', 'Автопаркинг'];
  }

  addOpt(opt: string) {
    this.options.unshift(opt);
    return false;
  }

  deleteOpt(option: string) {
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i] == option) {
        this.options.splice(i, 1);
        break;
      }
    }
  }

  showEdit() {
    this.isEdit = !this.isEdit;
  }

  autoSelect(carName: string) {
    switch (carName) {
      case 'BMW':
        this.name = 'BMW';
        this.speed = 280;
        this.model = 'M5';
        this.colors = {
          car: 'Blue',
          salon: 'White',
          wheels: 'Black',
        };
        this.options = ['Sport+', 'Navigator', 'Автопаркинг'];
        break;
      case 'Audi':
        this.name = 'Audi';
        this.speed = 235;
        this.model = 'RS7';
        this.colors = {
          car: 'Orange',
          salon: 'Yellow',
          wheels: 'Silver',
        };
        this.options = ['Comfort+', 'Navigator', 'Автопаркинг'];
        break;
      case 'Mercedes':
        this.name = 'Mercedes';
        this.speed = 200;
        this.model = 'C180';
        this.colors = {
          car: 'Black',
          salon: 'Orange',
          wheels: 'Silver',
        };
        this.options = ['ABS', 'Автопилот', 'Автопаркинг'];
        break;
    }
  }
}

interface IColors {
  car: string;
  salon: string;
  wheels: string;
}
