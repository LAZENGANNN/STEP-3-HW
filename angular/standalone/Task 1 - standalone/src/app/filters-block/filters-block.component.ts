import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters-block',
  standalone: true,
  templateUrl: './filters-block.component.html',
  styleUrl: './filters-block.component.css',
})
export class FiltersBlockComponent {
  @Output() setSortOutput = new EventEmitter<string>();
  @Output() setFilterOutput = new EventEmitter<string | number>();
  @Output() setSearchOutput = new EventEmitter<string>();
  @Output() setLightupSearchOutput = new EventEmitter<string>();

  SortClick(event: Event): void {
    this.setSortOutput.emit((event.target as HTMLButtonElement).value);
  }

  FilterChange(event: Event): void {
    this.setFilterOutput.emit((event.target as HTMLInputElement).value);
  }

  searchChange(event: Event): void {
    this.setSearchOutput.emit((event.target as HTMLInputElement).value);
  }
  lightupSearchChange(event: Event): void {
    this.setLightupSearchOutput.emit((event.target as HTMLInputElement).value);
  }
}
