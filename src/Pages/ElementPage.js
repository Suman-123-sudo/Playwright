class ElementPage{

   // Initialize constructor
    constructor(page) {
        this.page = page;
    } 

    // Object Repository

    checkboxBtn ="//span[contains(text(),'Check Box')]";
    homeCheckbox = "";
    uploadAndDownload="//span[normalize-space()='Upload and Download']";
    button="//span[normalize-space()='Buttons']"
    

    // methods

    async clickCheckboxBtn(){
        console.log(this,"::page")
      await this?.page?.click(this.checkboxBtn);
    }
    
   async clickuploadAndDownload(){
    console.log(this,"::page")
    await this?.page?.click(this.uploadAndDownload);
   }

   async clickbutton(){
    console.log(this,"::page")
    await this?.page?.click(this.button)
   }

}
export default ElementPage;