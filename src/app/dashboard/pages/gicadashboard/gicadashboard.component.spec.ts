import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GicadashboardComponent } from './gicadashboard.component';

describe('GicadashboardComponent', () => {
  let component: GicadashboardComponent;
  let fixture: ComponentFixture<GicadashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GicadashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GicadashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
