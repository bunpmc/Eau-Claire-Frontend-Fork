import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TankClusterManagement } from './tank-cluster-management';

describe('TankClusterManagement', () => {
  let component: TankClusterManagement;
  let fixture: ComponentFixture<TankClusterManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TankClusterManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TankClusterManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
