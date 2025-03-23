import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableeComponent } from './tablee.component';

describe('TableeComponent', () => {
  let component: TableeComponent;
  let fixture: ComponentFixture<TableeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
