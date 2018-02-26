import { async, ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { BannerInlineComponent } from './banner-inline.component';

describe('BannerInlineComponent (inline template)', () => {
  let comp: BannerInlineComponent;
  let fixture: ComponentFixture<BannerInlineComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerInlineComponent ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    })
    fixture = TestBed.createComponent(BannerInlineComponent);


    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });

  // it('should display original title', () => {
  //   // Hooray! No `fixture.detectChanges()` needed
  //   expect(el.textContent).toContain(comp.title);
  // });
  //
  // it('should still see original title after comp.title change', () => {
  //   const oldTitle = comp.title;
  //   comp.title = 'Test Title';
  //   // Displayed title is old because Angular didn't hear the change :(
  //   expect(el.textContent).toContain(oldTitle);
  // });
  //
  // it('should display updated title after detectChanges', () => {
  //   comp.title = 'Test Title';
  //   fixture.detectChanges(); // detect changes explicitly
  //   expect(el.textContent).toContain(comp.title);
  // });

});
