import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryViewer } from './story-viewer';

describe('StoryViewer', () => {
  let component: StoryViewer;
  let fixture: ComponentFixture<StoryViewer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoryViewer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryViewer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
