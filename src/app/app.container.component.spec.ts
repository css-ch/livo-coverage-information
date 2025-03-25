import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AppContainerComponent } from './app.container.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppContainerComponent],
      providers: [provideExperimentalZonelessChangeDetection()],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppContainerComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'livo-coverage-information' title`, () => {
    const fixture = TestBed.createComponent(AppContainerComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('livo-coverage-information');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppContainerComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Hello, livo-coverage-information',
    );
  });
});
