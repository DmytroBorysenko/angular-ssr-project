import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {TranslateModule} from '@ngx-translate/core';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  formData = signal<ContactForm>({
    name: '',
    email: '',
    message: '',
  });

  formSubmitted = signal<boolean>(false);

  updateName(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.formData.update(data => ({...data, name: input.value}));
  }

  updateEmail(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.formData.update(data => ({...data, email: input.value}));
  }

  updateMessage(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    this.formData.update(data => ({...data, message: textarea.value}));
  }

  submitForm(): void {
    // console.log('Form submitted with values:', this.formData());
    this.formSubmitted.set(true);

    // Reset form after submission
    setTimeout(() => {
      this.formData.set({
        name: '',
        email: '',
        message: '',
      });
      this.formSubmitted.set(false);
    }, 3000);
  }
}
