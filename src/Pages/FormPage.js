class FormPage{
    // Initialize constructor
    constructor(page) {
     this.page = page;
 } 
 
 // Object Repository
 form = ""
 practice="//span[contains(text(),'Practice Form')]"
 
 
 // Methods
 async clickform(){
    console.log(this,"::page")
     await this?.page?.click(this.button);  
 }

 async clickpractice(){
    console.log(this,"::page")
    await this?.page?.click(this.practice)
 }

 
 
 }
 export default FormPage;