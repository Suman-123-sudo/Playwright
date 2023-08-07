class HomePage{

   // Initialize constructor
    constructor(page) {
        this.page = page;
        
    } 

    // Object Repositories
   element ="//div[@class='category-cards']//div[1]//div[1]//div[2]//*[name()='svg']";
   alertframeWindow="//h5[contains(text(),'Alerts, Frame & Windows')]";
   bookStoreApplication="//h5[contains(text(),'Book Store Application')]";


//method also define 
   
 async clickElement(){
   console.log(this,"::page")
    await this?.page?.click(this.element);
    }
 async clickAlertWindow(){
   console.log(this,"::page")
    await this?.page?.click(this.alertframeWindow);
 }

 async clickBookStoreApplication(){
   console.log(this,"::page")
    await this?.page?.click(this.bookStoreApplication);
 }


}

export default HomePage;








