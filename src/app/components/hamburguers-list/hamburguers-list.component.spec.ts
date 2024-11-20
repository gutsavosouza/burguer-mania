import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburguersListComponent } from './hamburguers-list.component';

describe('HamburguersListComponent', () => {
  let component: HamburguersListComponent;
  let fixture: ComponentFixture<HamburguersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HamburguersListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HamburguersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
