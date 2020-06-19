import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';
import { UserService } from '../user.service';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  //สร้าง welcomeElemnt เพื่อใช้ในการตรวจสอบการแสดงผล
  let welcomeElement;
  //สร้าง userServiceStub เพื่อจำลอง userService ที่ใช้งานจริง
  let userServiceStub;

  beforeEach(async(() => {
    //กำหนดค่าที่จะใช้ทดสอบให้กับ userServiceStub
    userServiceStub = {
      isLoggedIn: true,
      user: { name: 'John' }
    };

    //ตั้งค่า Teting Module โดยกำหนด Provider UserService โดยใช้ค่าเป็น userServiceStub ที่จำลองขึ้น
    TestBed.configureTestingModule({
      declarations: [WelcomeComponent],
      providers: [{ provide: UserService, useValue: userServiceStub }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    //ดึงค่า Element ที่แสดงผลเพื่อใช้ตรวจสอบ
    welcomeElement = fixture.nativeElement.querySelector('.welcome');
  });

  it('เริ่มต้นต้องมีการแสดงผลเป็น Welcome, John', () => {
    //ย้ายส่วนของ detectChanges จาก beforeEach มาไว้ในการทดสอบแต่ละข้อ
    //เพื่อกำหนดการทำงานของ ngOnInit ให้ทำงานหลังจากการแก้ไขค่าที่จำลอง
    fixture.detectChanges();
    expect(welcomeElement.textContent).toContain('Welcome, John');
  });

  it('เมื่อทำการเปลี่ยนผู้ใช้เป็น Snow ต้องมีการแสดงผลเป็น Welcome, Snow', () => {
    //เปลี่ยนค่าชื่อของ User เป็น Snow
    userServiceStub.user.name = 'Snow';
    //เรียกใช้ detectChanges ให้มีการรัน ngOnInit
    fixture.detectChanges();
    expect(welcomeElement.textContent).toContain('Welcome, Snow');
  });

  it('เมื่อไม่มีการเข้าสู่ระบบ ต้องมีการแสดงผลเป็น Please log in.', () => {
    //เปลี่ยนสถานะการเข้าระบบให้เป็น false
    userServiceStub.isLoggedIn = false;
    //เรียกใช้ detectChanges ให้มีการรัน ngOnInit
    fixture.detectChanges();
    expect(welcomeElement.textContent).toContain('Please log in.');
  });
});
