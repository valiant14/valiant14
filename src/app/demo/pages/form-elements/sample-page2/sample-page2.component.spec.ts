import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SamplePage2Component } from './sample-page2.component';

describe('SamplePageComponent', () => {
  let component: SamplePage2Component;
  let fixture: ComponentFixture<SamplePage2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplePage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplePage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
