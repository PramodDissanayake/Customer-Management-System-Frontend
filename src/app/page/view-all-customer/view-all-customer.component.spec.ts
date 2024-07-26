import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllCustomerComponent } from './view-all-customer.component';

describe('ViewAllCustomerComponent', () => {
  let component: ViewAllCustomerComponent;
  let fixture: ComponentFixture<ViewAllCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAllCustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
