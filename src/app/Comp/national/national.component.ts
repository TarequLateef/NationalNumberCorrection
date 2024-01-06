import { Component } from '@angular/core';
import { NationalData, ValidateConditions } from 'src/app/NatModule/General';

@Component({
  selector: 'National-ID',
  templateUrl: './national.component.html',
  styleUrls: ['./national.component.css']
})
export class NationalComponent {
  currNational:string=''
  birthDate:Date=new Date
  natCase:ValidateConditions=new ValidateConditions

  enterNationaNo(enterNat:string){
    this.currNational=enterNat
  }

  validNumber(){
    var natLen = this.currNational.length==0? this.currNational.length:this.currNational.length+1,
      varNat=new NationalData(this.currNational),
      natValid:boolean[]=[natLen!=15,varNat.BirthDate>new Date()|| varNat.NumberError]
      
      var natNo = new NationalData(this.currNational);
      this.birthDate = natNo.BirthDate;
      console.log('national ', this.currNational, 'Date', natNo.Month)
  
      // console.log(natLen, varNat.BirthDate>new Date())
    this.natCase = this.ValidateFields('NationalNo',natValid,this.ValidationList)
  }

  ValidateFields(fName:string, flagValid:boolean[], ValidList:ValidateConditions[]):ValidateConditions{
    var inIndex=0, 
      retValid:ValidateConditions=new ValidateConditions;
    for (let index = 0; index < ValidList.length; index++) {
      const element = ValidList[index];
      if(element.FieldName==fName){
        if(flagValid[inIndex]){
          retValid.FieldName=fName
          retValid.Validate=flagValid[inIndex]
          retValid.ValidateMsg=ValidList[index].ValidateMsg
          break
        }
        else{inIndex++}
      }
    }
    return retValid
  }

  ValidationList:ValidateConditions[]=[
    {FieldName:'NationalNo', Validate:false, ValidateMsg:'field must be 14 letter'},
    {FieldName:'NationalNo', Validate:false, ValidateMsg:'the national no is wrong'},
  ]

}
