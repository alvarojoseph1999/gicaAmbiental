import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicWebAdminComponent } from './public-web-admin.component';

describe('PublicWebAdminComponent', () => {
  let component: PublicWebAdminComponent;
  let fixture: ComponentFixture<PublicWebAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicWebAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicWebAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
