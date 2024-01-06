import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'numberInput',
  templateUrl: './numberinput.component.html',
  styleUrls: ['./numberinput.component.css']
})
export class NumberinputComponent {
  @Input() txtTitle:string=''
  @Input() fieldRequired:boolean=false
  @Input() ValidateMsg:string=''
  @Output() txtChange=new EventEmitter
  @Output() ValidField = new EventEmitter()
  numberText:string=''
  @Input() ValidCase:boolean=false


  TextChange(key:KeyboardEvent){
    var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']
    var contLetters=['Backspace', 'Delete', 'Home', 'End', 'Shift', 'ArrowRight', 'ArrowLeft','Tab']
    if(numbers.includes(key.key)){
      if(this.numberText.includes('.') && key.key=='.'){key.preventDefault()}
      // console.log('key if:', key.key,'number Text:', this.numberText)
    }
    else{
      // console.log('else:', key.key)
      if(!contLetters.includes(key.key)){
        // console.log('not cont:', key.key)
        key.preventDefault()
      }
    }    
    this.txtChange.emit(this.numberText)
  }

  FieldValidation(){
    this.ValidField.emit(this.ValidateMsg)
  }


}
