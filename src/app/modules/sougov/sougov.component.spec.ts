import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SougovComponent } from './sougov.component';

describe('SougovComponent', () => {
  let component: SougovComponent;
  let fixture: ComponentFixture<SougovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SougovComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SougovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
