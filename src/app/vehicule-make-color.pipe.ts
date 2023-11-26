import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'vehiculeMakeColor'})

export class vehiculeMakeColorPipe implements PipeTransform {
  transform(type: string): string {

    let color: string;

    switch (type) {
      case 'Mercedes':
          color = 'red lighten-1';
          break;

        case 'Lamborghini':
          color = 'green lighten-1';
          break;
        case 'Audi':
          color = 'purple lighten-1';
          break;
        case 'BMW':
          color = 'blue lighten-1';
          break;
        default:
          color= 'yellow lighten-1';
        break;
    }

    return 'chip ' + color;

  }
}
