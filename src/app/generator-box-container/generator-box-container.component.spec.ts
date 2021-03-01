import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorBoxContainerComponent } from './generator-box-container.component';

describe('GeneratorBoxContainerComponent', () => {
  let component: GeneratorBoxContainerComponent;
  let fixture: ComponentFixture<GeneratorBoxContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratorBoxContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorBoxContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
