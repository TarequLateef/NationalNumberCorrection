
export class NationalData{
    BirthDate:Date=new Date()
    Day:number=0
    Month:number=0
    Year:number=0
    NumberError:boolean=false
    private govern:string[]=['01','02','03','04','11','12','13','14','15','16','17','18','19','21','22','23','24','25','26','27','28','29','31','32','33','34','35','88'];
    
    constructor(nationalNo:string){
        var c = nationalNo.substr(0,1)=='2'?'19':'20',
            y=c+nationalNo.substr(1,2),
            m=nationalNo.substr(3,2),
            d=nationalNo.substr(5,2),
            gov=nationalNo.substr(7,2);
        this.Day=Number(d)
        this.Month=Number(m)
        this.Year=Number(y)
        this.BirthDate=new Date(this.Year,this.Month,this.Day)
        this.NumberError=( /// date errors
            (this.Month>12 || this.Month<1) 
            || (this.Year%4==0 && this.Month==2 && this.Day>29 || this.Year%4!=0 && this.Month==2 && this.Day>28) 
            || ((this.Month==1 || this.Month==3 || this.Month==5 || this.Month==7 || this.Month==8 || this.Month==10 || this.Month==12) && this.Day>31)
            || ((this.Month==4 || this.Month==5 || this.Month==9 || this.Month==11) && this.Day>30)
            || (this.Day<1) || (this.Year<1)
            || !this.govern.includes(gov))
        // console.log(gov, y+'-'+m+'-'+d)
    }
}

export class ValidateConditions{
    Validate:boolean=false
    ValidateMsg:string=''
    FieldName:string=''
}
