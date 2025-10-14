import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishBreedManagement } from './fish-breed-management';

describe('FishBreedManagement', () => {
  let component: FishBreedManagement;
  let fixture: ComponentFixture<FishBreedManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FishBreedManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FishBreedManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
