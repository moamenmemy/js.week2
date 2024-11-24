







function addQuotes(){
    var quoteList =[
        {
            quote :"“So many books, so little time.”",
            said :"― Frank Zappa",
        },
        {
            quote :"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
            said :"― Albert Einstein",
        },
        {
            quote :"“A room without books is like a body without a soul.”",
            said :"― Marcus Tullius Cicero",
        },
        {
            quote :"“Be the change that you wish to see in the world.”",
            said :"― Mahatma Gandhi",
        }
    ]
    const random = Math.floor(Math.random() * (3 - 0 + 1)) +0;
    
    var cartona = ``;
     
      cartona= ` <p>${quoteList[random].quote}</p>
        <h2>${quoteList[random].said}</h2>`
        
    
    console.log(cartona);
    
    document.getElementById("quotes").innerHTML = cartona
    

}