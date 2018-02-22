import {TestBed, ComponentFixture} from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { HighlightDirective } from './highlight.directive';
import { By } from '@angular/platform-browser';

@Component({
  template: `<input type="text" appHighlight>` 
})
class TestAppHighlightComponent {
}

describe('HighlightDirective', () => {
  let directive: HighlightDirective;
  let fixture: ComponentFixture<TestAppHighlightComponent>;
  let component: TestAppHighlightComponent;
  let targetElement: DebugElement;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestAppHighlightComponent, HighlightDirective]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAppHighlightComponent);
    component = fixture.componentInstance;
    targetElement = fixture.debugElement.query(By.directive(HighlightDirective));
  });

  it('hovering over input', () => {
    targetElement.triggerEventHandler('mouseover', null);
    fixture.detectChanges();

    expect(targetElement.nativeElement.classList.contains('highlight'));
  });
});
