import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailComponent } from './detail.component';
import { ActivatedRoute } from '@angular/router';
import { convertToParamMap, ParamMap, Params } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import * as data from '../../../assets/users.json';

describe('DetailComponent', () => {
  let users: [any] = (data as any).default;
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async(() => {
    //สร้าง activedRouteStub เพื่อจำลองการทำงานของ ActivatedRoute
    let activatedRouteStub = new ActivatedRouteStub();
    //กำหนดให้มีการ Set ค่า Parameter 
    activatedRouteStub.setParamMap({id: 1})
    TestBed.configureTestingModule({
      declarations: [DetailComponent],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteStub}]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('เมื่อได้รับค่าจาก paramMap ค่าของ User ที่แสดงผลควรจะเป็น User เดียวกับ ID ที่ได้รับ', () => {
    //ตรวจสอบค่า User ที่แสดงผลว่าตรงกับ User ที่มี ID เป็น 1
    expect(component.user.id).toBe(1)
    expect(component.user.firstname).toBe("pitak")
    expect(component.user.lastname).toBe("meechai")
    expect(component.user.email).toBe("pi.m@gmail.com")
    expect(component.user.tel).toBe("0912875566")
  });
});

//สร้าง Class จำลองการทำงานของ activatedRoute เพื่อใช้ส่งค่า Parameter
class ActivatedRouteStub {
  //สร้าง Subject เพื่อใช้งานในการส่งค่าของ ParamMap 
  private subject = new ReplaySubject<ParamMap>();
  readonly paramMap = this.subject.asObservable();
  
  constructor() {
  }
  
  //สร้าง method ที่ใช้รับค่า paramMap และอัพเดทค่าผ่านทาง subject
  setParamMap(params?: Params) {
    this.subject.next(convertToParamMap(params));
  }
}
