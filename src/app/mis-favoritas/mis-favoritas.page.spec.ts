import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisFavoritasPage } from './mis-favoritas.page';

describe('MisFavoritasPage', () => {
  let component: MisFavoritasPage;
  let fixture: ComponentFixture<MisFavoritasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MisFavoritasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
