import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkteamComponent } from './workteam.component';

describe('WorkteamComponent', () => {
  let component: WorkteamComponent;
  let fixture: ComponentFixture<WorkteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkteamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
