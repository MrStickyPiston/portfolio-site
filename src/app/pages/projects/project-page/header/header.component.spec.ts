import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProjectPageHeaderComponent} from './header.component';

describe('HeaderComponent', () => {
  let component: ProjectPageHeaderComponent;
  let fixture: ComponentFixture<ProjectPageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectPageHeaderComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProjectPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
