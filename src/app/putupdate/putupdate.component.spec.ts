import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutupdateComponent } from './putupdate.component';

describe('PutupdateComponent', () => {
  let component: PutupdateComponent;
  let fixture: ComponentFixture<PutupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PutupdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PutupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
