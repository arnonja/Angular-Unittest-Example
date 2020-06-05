import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-citizen-id',
  templateUrl: './citizen-id.component.html',
  styleUrls: ['./citizen-id.component.css']
})
export class CitizenIdComponent implements OnInit {
  result: boolean = null;

  @ViewChild("inputCitizen") inputCitizen: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  onClickSubmit(){
    //ดึงค่าจาก Input และส่งไป verifyCitizenId
    this.result = this.verifyCitizenId(this.inputCitizen.nativeElement.value);
  }

  //ตรวจสอบเลขบัตรปชช
  verifyCitizenId(citizenId:string):boolean{
    //แยกค่า citizenId และแปลงเป็นตัวเลข 
    let numbers = citizenId.split('').map(num=>Number(num))
    let result = false;
    let sum = 0;
    let lastVal;

    //คำนวนและรวมผลคูณของแต่ละหลักตามสูตรตรวจสอบเลขบัตรปชช ยกเว้นหลักสุดท้าย
    numbers.forEach((num, index) => {
        if (index < 12) {
            sum += (13 - index)*num;
        } else {
            lastVal = num;
        }
    })

    //นำผลรวมหาค่าเศษด้วย %11
    let modResult = (sum % 11);

    //นำ 11 มาลบด้วยค่าเศษ
    let minusResult = (11 - modResult)%10;

    //นำผลลบมาเทียบกับหลักสุดท้าย ต้องตรงกันถึงจะถูกต้อง
    if (minusResult == lastVal) {
        result = true;
    }

    return result;
  }
}
