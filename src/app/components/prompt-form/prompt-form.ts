import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { StoryViewer } from "../story-viewer/story-viewer";

@Component({
  selector: 'app-prompt-form',
  imports: [ReactiveFormsModule, CommonModule, StoryViewer],
  templateUrl: './prompt-form.html',
  styleUrl: './prompt-form.css',
})
export class Promptform {
  form: FormGroup;
  loading = false;

  artStyles = ['Watercolor', 'Pixel', 'Sketch', 'Fantasy', 'Comic'];
  pageCounts = Array.from({ length: 10 }, (_, i) => i + 1);

  storyPages: { text: string; imageUrl: string }[] = [];

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      prompt: ['', Validators.required],
      artStyle: ['', Validators.required],
      pageCount: [1, [Validators.required]],
    });
  }

  ngOnInit() {
    console.log('Art styles:', this.artStyles);
    console.log('Page counts:', this.pageCounts);
  }

  submitForm() {
    if (this.form.valid) {
      this.loading = true;
      this.storyPages = []; // Resets pages if the user generates a new story
      const payload = {
        prompt: this.form.value.prompt,
        artStyle: this.form.value.artStyle,
        pageCount: this.form.value.pageCount,
      };

      this.http
        .post<{ pages: { text: string; imageUrl: string }[] }>(
          'https://enchantedquillapi-production.up.railway.app/api/generate',
          payload
        )
        .subscribe({
          next: (response) => {
            this.storyPages = response.pages;
            this.loading = false;
          },
          error: (err) => {
            console.error('Error generating story:', err);
            this.loading = false;
          },
        });
    }
  }
}
