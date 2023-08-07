class WidgetsPage{
    // Initialize constructor
    constructor(page) {
     this.page = page;
 } 
 
 // Object Repository
 Widgets="/h5[contains(text(),'Widgets')]";
 datePicker="//span[normalize-space()='Date Picker']"
 
 
 // Methods
 async clickWidgets(){
    console.log(this,"::page")
     await this?.page?.click(this.Widgets);  
 }

 async clickDatePicker(){
    console.log(this,"::page")
    await this?.page?.click(this.datePicker);  
}
 
 }
 export default WidgetsPage;