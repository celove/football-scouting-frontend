import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCampeonatoMediaGolsComponent } from './dialog-campeonato-media-gols.component';

describe('DialogCampeonatoMediaGolsComponent', () => {
  let component: DialogCampeonatoMediaGolsComponent;
  let fixture: ComponentFixture<DialogCampeonatoMediaGolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCampeonatoMediaGolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCampeonatoMediaGolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
