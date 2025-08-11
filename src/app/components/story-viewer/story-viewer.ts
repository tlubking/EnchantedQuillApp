import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-story-viewer',
  imports: [CommonModule],
  templateUrl: './story-viewer.html',
  styleUrl: './story-viewer.css',
})
export class StoryViewer implements OnChanges {
  @Input() pages: { text: string; imageUrl: string }[] = [];
  currentPage = 0;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['pages']) {
      this.currentPage = 0; // Reset to first page when pages change
    }
  }

  nextPage() {
    if (this.currentPage < this.pages.length - 1) this.currentPage++;
  }
  prevPage() {
    if (this.currentPage > 0) this.currentPage--;
  }
}
