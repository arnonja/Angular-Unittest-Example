import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenIdComponent } from './citizen-id.component';

describe('CitizenIdComponent', () => {
  //จัดเตรียม Component ก่อนการทดสอบ โดยเป็นส่วนที่ถูก generate มาไม่ต้องทำการปรับแก้ (ุบรรทัดที่ 6-21)
  let component: CitizenIdComponent;
  let fixture: ComponentFixture<CitizenIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitizenIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //การทดสอบ Class
  //ทดสอบ attribute ของ Class
  //ทำการตรวจสอบค่า result ที่เป็นผลของการตรวจสอบ โดยค่าควรจะเป็น null เนื่องจากยังไม่มีการตรวจสอบเกิดขึ้น
  it('ค่าเริ่มต้นของ result ควรจะเป็น null', () => {
    expect(component.result).toEqual(null);
  });

  //ทดสอบ Method ของ Class
  //ตรวจสอบฟังชั่นการตรวจสอบเลขบัตรประชาชน โดยใส่เลขบัตรที่ถูกต้อง
  it('ใส่เลขบัตรปชชที่ถูกต้อง ควรจะ return true', () => {
    expect(component.verifyCitizenId("1275644897776")).toBeTruthy();
  });

  //ตรวจสอบฟังชั่นการตรวจสอบเลขบัตรประชาชน โดยใส่เลขบัตรที่ผิด
  it('ใส่เลขบัตรปชชที่ผิด ควรจะ return false', () => {
    expect(component.verifyCitizenId("1275644897777")).toBeFalse();
  });
});
