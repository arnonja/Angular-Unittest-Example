import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LightbulbComponent } from './lightbulb.component';
import { By } from '@angular/platform-browser';

describe('LightbulbComponent', () => {
  let component: LightbulbComponent;
  let fixture: ComponentFixture<LightbulbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightbulbComponent ]
    })
    .compileComponents();
  }));
 
  beforeEach(() => {
    fixture = TestBed.createComponent(LightbulbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //ทดสอบ DOM
  it('ในตอนเริ่มต้นควรจะแสดงผลหลอดไฟที่เปิดอยู่ (on.png)', () => {
    //ดึง Element ของหลอดไฟมาเพื่อตรวจสอบ
    let lightbulbElement = fixture.debugElement.query(By.css('img#lightbulb')).nativeElement;
    //ตรวจสอบว่ามีการแสดงผลหลอดไฟที่ปิด (on.png) จาก src ที่กำหนด
    expect(lightbulbElement.src).toContain("on.png")
  });

  it('เมื่อทำการใช้งาน switch หลอดไฟจะต้องปิด (off.png)', () => {
    //เรียก Switch เพื่อให้หลอดไฟดับ
    component.switch();
    //ใช้งาน detectChange ให้มีการ render element ใหม่
    fixture.detectChanges();
    //ดึง Element ของหลอดไฟมาเพื่อตรวจสอบ
    let lightbulbElement = fixture.debugElement.query(By.css('img#lightbulb')).nativeElement;
    //ตรวจสอบว่ามีการแสดงผลหลอดไฟที่ปิด (off.png) จาก src ที่กำหนด
    expect(lightbulbElement.src).toContain("off.png")
  });
});
