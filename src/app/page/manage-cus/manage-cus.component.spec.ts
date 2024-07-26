import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCusComponent } from './manage-cus.component';

describe('ManageCusComponent', () => {
  let component: ManageCusComponent;
  let fixture: ComponentFixture<ManageCusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageCusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageCusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
