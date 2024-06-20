import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestinominalsComponent } from './testinominals.component';

describe('TestinominalsComponent', () => {
  let component: TestinominalsComponent;
  let fixture: ComponentFixture<TestinominalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestinominalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestinominalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
