import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SafeResourceUrl, DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ChatBotModel, ChatBotresultModel, ChatBotService } from 'build/openapi';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-chat-bot-panel',
  templateUrl: './chat-bot-panel.component.html',
  styleUrls: ['./chat-bot-panel.component.scss']
})
export class ChatBotPanelComponent implements OnInit {
  academics: any[] = [
    { id: 1, grade: 'GRADE: PRE-NURSERY', img: '../../../../assets/images/chatbot/pre-nursery.jpg' },
    { id: 2, grade: 'GRADE: NURSERY', img: '../../../../assets/images/chatbot/nursery.jpg' },
    { id: 3, grade: 'GRADE: RECEPTION', img: '../../../../assets/images/chatbot/reception.jpg' },
    { id: 4, grade: 'GRADE: PREP ONE', img: '../../../../assets/images/chatbot/prep1.jpg' },
    { id: 5, grade: 'GRADE: PREP TWO', img: '../../../../assets/images/chatbot/prep2.jpg' },
  ]
  get locationId(): number {
    return environment.locationId;
  }
  get locationName(): string {
    return environment.locationName;
  }
  messageForm: FormGroup;
  nameForm: FormGroup;
  phoneNoForm: FormGroup;
  EmailForm: FormGroup;
  countryCode = '+91';
  isMenusOpened = false;

  menuList: ChatBotModel[];
  chatDataHistory: any[] = [];
  chatBotMenuDetails: ChatBotresultModel;
  isEnquiryYes = false;
  isEnquiryNo = false;
  safeSrc: SafeResourceUrl;
  bannerOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: [
      '<span class="material-icons">arrow_back</span>',
      '<span class="material-icons">arrow_forward</span>',
    ],
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 2,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: true,
    autoplay: false,
    autoplayHoverPause: true,
    autoplaySpeed: 2000,
    lazyLoad: true,
  };
  enquiryId: number;
  constructor(private fb: FormBuilder, private chatbotService: ChatBotService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.messageForm = this.fb.group({
      message: ['']
    });
    this.nameForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]]
    });
    this.phoneNoForm = this.fb.group({
      phoneNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
    this.EmailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
    this.getMenus();
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/Zm4pLU8Yo60');
  }
  getMenus() {
    this.chatbotService.apiChatBotGetChatBotResponsesGet().subscribe(res => {
      this.menuList = res;
    })
  }
  onCountryChange(args) {
    this.countryCode = '+' + args.dialCode;
  }
  viewMenuContent(id: number) {
    this.isEnquiryYes = false;
    this.isMenusOpened = false;
    let model = {
      id: id,
      locationId: this.locationId,
      searchString: ""
    }
    this.chatbotService.apiChatBotGetChatBotDetailsPost(model).subscribe(res => {
      this.chatBotMenuDetails = res;
      if (this.chatBotMenuDetails.chatBotDetailsModel != null) {
        for (let i = 0; this.chatBotMenuDetails.chatBotDetailsModel.length > i; i++) {
          let model = {
            message: this.chatBotMenuDetails.chatBotDetailsModel[i].message,
            isSenderMessage: this.chatBotMenuDetails.chatBotDetailsModel[i].isSenderMessage,
            isTypedMessage: false,
            isAdmissions: id == 1 ? true : false,
            isAcademics: id == 2 ? true : false,
          }
          this.chatDataHistory.push(model);
        }
        this.onScroll();
      }
    })
  }
  sendMessage() {
    let model = {
      id: 0,
      locationId: this.locationId,
      searchString: this.messageForm.value.message
    }
    this.chatData(model);
    this.isEnquiryYes = false;
  }
  additionalContent(item: any) {
    this.isEnquiryYes = false;
    if (item.id == 1) {
      let model = [
        { id: item.id, message: item.grade, isSenderMessage: true, isTypedMessage: true },
        { message: "<span>The Pre-Nursery Programme is designed to nurture young children, while providing the physical, emotional, and intellectual stimulus to help them optimize their potential for learning and growth. Our programme caters to students from ages 1 years to 2 years. <span>", isSenderMessage: false, isTypedMessage: false },
        { message: "<span>Play based learning: Children learn best when they are experimenting and using their imagination, creativity and tactile senses to experience the world. We use the play-based approach, to ensure children learn even complex concepts, easily.<span>", isSenderMessage: false, isTypedMessage: false, isAcademicsButton: true },       
      ]
      this.addDataToChatHistory(model);
      this.onScroll();
    }   
    else if (item.id == 2) {
      let model = [
        { id: item.id, message: item.grade, isSenderMessage: true, isTypedMessage: true },
        { message: "<span>In Nursery Programme, a broad-based curriculum integrates a genuine love for learning through stories and language and expression, along with a focus on numerical concepts and exploration of the world around them. <span>", isSenderMessage: false, isTypedMessage: false },
        { message: "<span>Arts, sports, music and dance are seamlessly incorporated into the curriculum, affording multi-sensorial and comprehensive learning opportunities.<span>", isSenderMessage: false, isTypedMessage: false, isAcademicsButton: true },       
      ]
      this.addDataToChatHistory(model);
      this.onScroll();
    }   
    else if (item.id == 3) {
      let model = [
        { id: item.id, message: item.grade, isSenderMessage: true, isTypedMessage: true },
        { message: "<span>Our Reception programme caters to students from ages 3 years to 4 years.<span>", isSenderMessage: false, isTypedMessage: false },
        { message: "<span>The curriculum encourages children to ask questions, plan investigations, explore various outcomes, and reach credible and logical conclusions, with teachers as facilitators. The curriculum is a balanced blend of five essential aspects: concepts, knowledge, skills, attitudes and action.<span>", isSenderMessage: false, isTypedMessage: false, isAcademicsButton: true },       
      ]
      this.addDataToChatHistory(model);
      this.onScroll();
    }   
    else if (item.id == 4) {
      let model = [
        { id: item.id, message: item.grade, isSenderMessage: true, isTypedMessage: true },
        { message: "<span>In Prep One, we construct an environment and pedagogy that is secure and enriched, where students are encouraged to become lifelong learners, both inside and outside the classroom.<span>", isSenderMessage: false, isTypedMessage: false },
        { message: "<span>With a strong focus on conceptual learning and development of leadership skills, children engage in a trans-disciplinary curriculum that meets international benchmarks for Literacy, Numeracy, Science, Social Studies and PSPE (Personal, Social and Physical Education).<span>", isSenderMessage: false, isTypedMessage: false, isAcademicsButton: true },       
      ]
      this.addDataToChatHistory(model);
      this.onScroll();
    }   
    else if (item.id == 5) {
      let model = [
        { id: item.id, message: item.grade, isSenderMessage: true, isTypedMessage: true },
        { message: "<span>We offer the Prep 2 Programme for children aged 5 to 6 years of age. The core skills we help students to imbibe and strengthen are critical thinking, communication, collaboration and creativity.<span>", isSenderMessage: false, isTypedMessage: false },
        { message: "<span>The Prep Two environment is warm and inspiring, filled with wonderful learning materials. We believe in following the child and helping them in attaining their potential capabilities.<span>", isSenderMessage: false, isTypedMessage: false, isAcademicsButton: true },       
      ]
      this.addDataToChatHistory(model);
      this.onScroll();
    }   
  }
  addDataToChatHistory(model: any[]) {
    for (let i = 0; model.length > i; i++) {
      this.chatDataHistory.push(model[i]);
    }
  }

  chatData(messageModel) {
    this.isEnquiryYes = false;
    this.chatbotService.apiChatBotGetChatBotDetailsPost(messageModel).subscribe(res => {
      this.chatBotMenuDetails = res;
      let model = {
        message: messageModel.searchString,
        isSenderMessage: true,
        isTypedMessage: true,
      }
      this.chatDataHistory.push(model);
      this.messageForm.reset();
      if (this.chatBotMenuDetails.botResponse != null) {
        for (let i = 0; this.chatBotMenuDetails.botResponse.intents.length > i; i++) {
          let model = {
            message: this.getRandomItem(this.chatBotMenuDetails.botResponse.intents[i].responses),
            isSenderMessage: false,
            isTypedMessage: true,
          }
          this.chatDataHistory.push(model);
        }
        this.onScroll();
      }
    })
  }
  clearData() {
    this.chatDataHistory = [];
  }
  enquiry() {
    let model = [
      {
        message: 'Yes',
        isSenderMessage: true,
        isTypedMessage: true,
      },
      {
        message: 'By what name should I address you?',
        isSenderMessage: false,
        isTypedMessage: true,
      },
    ]
    for (let i = 0; model.length > i; i++) {
      this.chatDataHistory.push(model[i]);
    }
    this.isEnquiryYes = true;
    this.enquiryId = 1;
    this.onScroll();
  }
  submitName() {
    if (this.nameForm.valid) {
      let model = [
        {
          message: this.nameForm.value.name,
          isSenderMessage: true,
          isTypedMessage: true
        },
        {
          message: 'Would you mind sharing your number as well so that we can call you back?',
          isSenderMessage: false,
          isTypedMessage: true
        },
      ]
      for (let i = 0; model.length > i; i++) {
        this.chatDataHistory.push(model[i]);
      }
      this.enquiryId = 2;
    }
    else {
      Object.keys(this.nameForm.controls).forEach(key => {
        this.nameForm.get(key).markAsDirty();
      });
      return;
    }
  }
  submitPhone() {
    if (this.phoneNoForm.valid) {
      let model = [
        {
          message: this.phoneNoForm.value.phoneNo,
          isSenderMessage: true,
          isTypedMessage: true
        },
        {
          message: 'Let me have your email id please.',
          isSenderMessage: false,
          isTypedMessage: true
        },
      ]
      for (let i = 0; model.length > i; i++) {
        this.chatDataHistory.push(model[i]);
      }
      this.enquiryId = 3;
    }
    else {
      Object.keys(this.phoneNoForm.controls).forEach(key => {
        this.phoneNoForm.get(key).markAsDirty();
      });
      return;
    }
  }
  submitEmail() {
    if (this.EmailForm.valid) {
      let model = [
        {
          message: this.EmailForm.value.email,
          isSenderMessage: true,
          isTypedMessage: true
        },
        {
          message: 'Thanks for your enquiry. Our team will contact you within 24 Hours',
          isSenderMessage: false,
          isTypedMessage: true
        }
      ]
      for (let i = 0; model.length > i; i++) {
        this.chatDataHistory.push(model[i]);
      }
      this.isEnquiryYes = false;
      let chatBotUserDetails = {
        userName: this.nameForm.value.name,
        emailId: this.EmailForm.value.email,
        phoneNumber: this.phoneNoForm.value.phoneNo,
        locationId: this.locationId
      }
      this.chatbotService.apiChatBotChatBotUserDetailsPost(chatBotUserDetails).subscribe();
    }
    else {
      Object.keys(this.EmailForm.controls).forEach(key => {
        this.EmailForm.get(key).markAsDirty();
      });
      return;
    }
  }
  onScroll() {
    setTimeout(() => {
      document.getElementById('last').scrollIntoView({ behavior: 'smooth' });
    }, 500);
  }
  getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
  }
  safeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
