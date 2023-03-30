import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Data, Router } from '@angular/router';
import * as AOS from 'aos';
import {
  DropDownService,
  GradeApplyingForModel,
  HomeService,
} from 'build/openapi';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  funClassSubmissionForm: FormGroup;
  contactUsForm: FormGroup;
  contentView: any;
  isLoading = false;
  gradeList: GradeApplyingForModel[];
  todayDate = new Date();
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar,
    private DropDownService: DropDownService,
    private homeService: HomeService,
    private titleService: Title,
    private meta: Meta,
    private router: Router,
    private dateAdapter: DateAdapter<Date>
  ) {
    this.contentView = this.route.snapshot.queryParamMap.get('contentView');
    if (this.contentView) {
      setTimeout(() => {
        this.onscroll(this.contentView);
      }, 1000);
    }

    this.dateAdapter.setLocale('en-GB');
  }

  ngOnInit(): void {
    AOS.init();
    this.route.data.subscribe((data: Data) => {
      this.titleService.setTitle(data.title);
      this.meta.updateTag({ name: 'description', content: data.description });
    });
    this.contactUsForm = this.fb.group({
      parentsName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      ],
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      ],
      mobileNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern('^[6-9]{1}[0-9]{9}$'),
        ],
      ],
      emailId: ['', [Validators.required, Validators.email]],
      gradeId: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      dateOfBirth: ['', Validators.required],
      message: [''],
    });
    this.DropDownService.apiDropDownGradeApplyingForGet().subscribe((data) => {
      this.gradeList = data;
    });
  }
  onscroll(contentView: string) {
    this.contentView = contentView;
    document.getElementById(contentView).scrollIntoView({ behavior: 'smooth' });
  }

  onSubmit() {
    if (this.contactUsForm.valid) {
      this.isLoading = true;
      this.homeService
        .apiHomeContactUsPost(5, this.contactUsForm.value)
        .subscribe((data) => {
          if (data.statusCode === 200) {
            this.isLoading = false;
            this.router.navigate(['thank-you']);
            this.snackbar.open(data.message, null, { duration: 2000 });
            this.contactUsForm.reset();
          } else {
            this.isLoading = false;
            this.snackbar.open(data.message, null, { duration: 2000 });
          }
        });
    } else {
      this.snackbar.open('please fill all required fields', null, {
        duration: 2000,
      });
    }
  }
}
