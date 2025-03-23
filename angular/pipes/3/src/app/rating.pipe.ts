import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating',
  standalone: false,
})
export class RatingPipe implements PipeTransform {
  transform(rating: number): string {
    if (rating <= 50) {
      return `<p> 🚀 Новичок</p>`;
    } else if (rating > 50 && rating < 90 ) {
      return `<p> 🎖 активный участник</p>`;
    } else if (rating >= 90) {
      return `<p> ★ Почётный ученик</p>`;
    }
    return "неверное значение"
  }
}
