class AlertWindowsPage{

        // Initialize constructor
         constructor(page) {
             this.page = page;
         } 
     
         // Object Repository
         browserWindows="//span[contains(text(),'Browser Windows')]";
         newWindow="//button[@id='windowButton']";
         frames="//div[normalize-space()='Forms']";
         alerts="//span[normalize-space()='Alerts']";
         onButtonClick="//button[@id='timerAlertButton']"
         text="//h1[contains(text(),'This is a sample page')]"

         // methods
     
         async clickbrowserWindow(){
            console.log(this,"::page")
             await this?.page?.click(this.browserWindows);
         }
         async clicknewWindow(){
            console.log(this,"::page")
            await this?.page?.click(this.newWindow)
         }
         async clickframes(){
            console.log(this,"::page")
            await this?.page?.click(this.frames)
         }
         async clickalerts(){
            console.log(this,"::page")
            await this?.page?.click(this.alerts)
         }
         async clickonButtonClick(){
            console.log(this,"::page")
            await this?.page?.click(this.onButtonClick)
         }
         async clicktext(){
            console.log(this,"::page")
            await this?.page?.click(this.text)
         }
     }
     export default AlertWindowsPage ;



