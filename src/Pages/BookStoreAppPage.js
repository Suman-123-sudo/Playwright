class BookStoreAppPage{
   // Initialize constructor
   constructor(page) {
    this.page = page;
} 

// Object Repository
search="//input[@id='searchBox']";


// Methods
async clicksearch(){
    console.log(this,"::page")
    await this?.page?.click(search);  
}

}
export default BookStoreAppPage;