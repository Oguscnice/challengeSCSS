import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreciousComponent } from './precious.component';

describe('PreciousComponent', () => {
  let component: PreciousComponent;
  let fixture: ComponentFixture<PreciousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreciousComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreciousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
