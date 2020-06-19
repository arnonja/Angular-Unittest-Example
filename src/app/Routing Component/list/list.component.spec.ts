import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { Router } from '@angular/router';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  //สร้าง routerStub เพื่อจำลอง Router
  let routerStub;

  beforeEach(async(() => {
    //กำหนดค่า routerStub ด้วย spyObject เพื่อให้สามารถตรวจสอบการใช้งานได้
    routerStub = jasmine.createSpyObj("Router",["navigateByUrl"])
    TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      providers: [{provide:Router, useValue:routerStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('เมื่อมีการเรียกใช้ gotoDetail ต้องมีการ navigate ไปยัง url ที่ถูกต้อง', () => {
    //กำหนดค่า spy จาก spyObject ที่จำลอง Router เพื่อตรวจสอบการใช้งานของ method navigateByUrl
    let spy = routerStub.navigateByUrl as jasmine.Spy;
    //กำหนด userId และเรียกใช้ gotoDetail 
    let userId = 1;
    component.gotoDetail(userId);
    //ตรวจสอบว่ามีการเรียก navigateByUrl 1 ครั้ง
    expect(spy.calls.count()).toEqual(1);
    //ตรวจสอบว่ามีการเรียก navigateByUrl ด้วย url '/users/1' ตาม userId ที่ได้รับ
    expect(spy.calls.argsFor(0)[0]).toEqual("/users/1");
  });
});
