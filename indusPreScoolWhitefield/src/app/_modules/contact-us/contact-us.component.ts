import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Data } from '@angular/router';
import * as AOS from 'aos';
import {
  AcademiYearModel,
  DropDownService,
  GradeApplyingForModel,
  HomeService,
} from 'build/openapi';
import { Meta, Title } from '@angular/platform-browser';
import { DateAdapter } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { EnquireFormComponent } from '../shared/enquire-form/enquire-form.component';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  contactUsForm: FormGroup;
  contentView: any;
  isLoading = false;
  gradeList: GradeApplyingForModel[];
  AcademicYear: AcademiYearModel[];
  todayDate = new Date();

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar,
    private dialog: MatDialog,
    private homeService: HomeService,
    private DropDownService: DropDownService,
    private titleService: Title,
    private meta: Meta,
    private dateAdapter: DateAdapter<Date>
  ) {
    this.contentView = this.route.snapshot.queryParamMap.get('contentView');
    if (this.contentView) {
      setTimeout(() => {
        this.onscroll(this.contentView);
      }, 1000);
    }

    this.dateAdapter.setLocale('en-GB')
  }

  ngOnInit(): void {
    AOS.init();
    this.route.data.subscribe((data: Data) => {
      this.titleService.setTitle(data.title);
      this.meta.updateTag({ name: 'description', content: data.description });
    });
    this.contactUsForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      mobileNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[6-9]{1}[0-9]{9}$')]],
      emailId: ['', [Validators.required, Validators.email]],
      gradeId: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      messageBox: [''],
      dateOfBirth: ['', Validators.required],
      parentsName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      academicYearId: ['', Validators.required],
    });

    this.DropDownService.apiDropDownGradeApplyingForGet().subscribe((data) => {
      this.gradeList = data.slice(0, 5);
      console.log(this.gradeList)
    });
    this.DropDownService.apiDropDownGetAcademicYearGet().subscribe(data => {
      this.AcademicYear = data;
    });
  }
  onscroll(contentView: string) {
    this.contentView = contentView;
    document.getElementById(contentView).scrollIntoView({ behavior: 'smooth' });
  }
  onSubmit() {
    if (this.contactUsForm.valid) {
      this.isLoading = true;
      this.homeService.apiHomeEnquiryFormPost(6, this.contactUsForm.value).subscribe((data) => {
        if (data.statusCode === 200) {
          this.isLoading = false;
          this.snackbar.open(data.message, null, { duration: 2000 });
          this.contactUsForm.reset();
        } else {
          this.isLoading = false;
          this.snackbar.open(data.message, null, { duration: 2000 });
        }
      });
    } else {
      this.snackbar.open('Please fill all the required fields', null, { duration: 2000 });
    }
  }

  enquireForm() {
    this.dialog.open(EnquireFormComponent, {
      width: '900px'
    })
  }
}
