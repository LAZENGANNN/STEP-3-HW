import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteamdbComponent } from './steamdb.component';

describe('SteamdbComponent', () => {
  let component: SteamdbComponent;
  let fixture: ComponentFixture<SteamdbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SteamdbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SteamdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
