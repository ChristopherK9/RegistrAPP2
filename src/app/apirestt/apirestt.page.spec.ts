import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiresttPage } from './apirestt.page';

describe('ApiresttPage', () => {
  let component: ApiresttPage;
  let fixture: ComponentFixture<ApiresttPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiresttPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
