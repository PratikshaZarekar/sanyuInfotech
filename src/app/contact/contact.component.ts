import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting: boolean = false; // Loading state

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength]],
      message: ['', [Validators.required, Validators.minLength]]
    });
  }

  async submitForm() {
    if (this.contactForm.invalid) {
      alert('Please fill in all fields correctly.');
      return;
    }

    this.isSubmitting = true; // Disable button while submitting

    try {
      await this.contactService.sendMessage(this.contactForm.value).pipe(first()).toPromise();
      alert('Message sent successfully!');
      this.contactForm.reset();
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      this.isSubmitting = false; // Re-enable button
    }
  }
}
