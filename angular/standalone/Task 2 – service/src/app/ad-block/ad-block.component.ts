import { Component } from '@angular/core';
import { EstateClass } from './estateClass';

import { CommonModule } from '@angular/common';

import { AdComponent } from '../ad/ad.component';
import { FiltersBlockComponent } from '../filters-block/filters-block.component';
import { EstateDataService } from '../service/estate-data.service';

@Component({
  selector: 'app-ad-block',
  standalone: true,
  imports: [AdComponent, FiltersBlockComponent, CommonModule],
  templateUrl: './ad-block.component.html',
  styleUrl: './ad-block.component.css',
})
export class AdBlockComponent {
  arr: EstateClass[] = [];

  constructor(private dataService: EstateDataService) {
    this.arr = this.dataService.estateData;
  }

  searchableString: string = '';

  applySort(name: string) {
    this.arr = this.dataService.applySort(name);
  }
  applyFilters(price: any) {
    this.arr = this.dataService.applyFilters(price);
  }
  applySearch(str: any) {
    this.arr = this.dataService.applySearch(str);
  }
  deleteBlock(str: any) {
    const oldArr = this.arr
    this.arr = this.dataService.deleteBlock(str)
    if(oldArr.length === this.arr.length){
      alert('ошибка удаления')
    }
  }
}
