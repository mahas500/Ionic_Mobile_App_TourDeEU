import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TravelPackagePage } from './travel-package.page';

describe('TravelPackagePage', () => {
  let component: TravelPackagePage;
  let fixture: ComponentFixture<TravelPackagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelPackagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TravelPackagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
