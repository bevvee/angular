import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleColorPipe',
})
export class TitleColorPipePipe implements PipeTransform {
  transform(title: string): string {
    if (title.length > 10) {
      return 'red';
    }else{
      return 'green';
    }
  }
}
