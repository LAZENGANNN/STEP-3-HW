import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OzonCardComponent } from './ozon-card.component';

describe('OzonCardComponent', () => {
  let component: OzonCardComponent;
  let fixture: ComponentFixture<OzonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OzonCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OzonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
