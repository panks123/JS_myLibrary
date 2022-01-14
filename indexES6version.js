// To be done further
// 1. Store all the data to the local Storage
// 2. Add a delete button for every book entry

class Book {
    constructor(name, author, genre) {
        this.name = name;
        this.author = author;
        this.genre = genre;
    }
}

class Display {
    add(book) {

        let tBody = document.getElementById('tableBody');
//---------------------------------------------------------------- 
        
        

        








// -----------------------------------------------------------------
        let UIString = `<tr>
                          <td>${book.name}</td>
                          <td>${book.author}</td>
                          <td>${book.genre}</td>
                        </tr>`
        tBody.innerHTML += UIString;
    }
    
    clear() {
        let form = document.getElementById('libForm');
        form.reset();
    }

    validate(book) {
        if(book.name.length<4||book.author.length<4)
        {
            return false;
        }
        else
        {
            return true;
        }
        
    }

    show(type,toDisplay){
        let message=document.getElementById('message');
        let point;
        if(type=='success')
        {
            point='Success';
        }
        else
        {
            point='Warning'
        }
        message.innerHTML=`<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                             <strong>${point}:</strong> ${toDisplay}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
      </div>
    
        `
        setTimeout(function() {
            message.innerHTML='';
        }, 3000);
    }
}

let libForm = document.getElementById('libForm');
libForm.addEventListener('submit', actionOnSubmitForm)

function actionOnSubmitForm(e) {

    name = document.getElementById('bookName').value;
    author = document.getElementById('author').value;

    let fiction = document.getElementById('fiction');
    let biography = document.getElementById('biography');
    let technology = document.getElementById('technology');


    let genre
    if (fiction.checked) {
        genre = fiction.value;
    }
    else if (biography.checked) {
        genre = biography.value;
    }
    else if (technology.checked) {
        genre = technology.value;
    }

    let book = new Book(name, author, genre);

    let display = new Display();
    
    if(display.validate(book))
    {
        display.add(book);
        display.clear();
        display.show('success','Your book has been added successfully.');
    }
    else{
        display.show('danger',' You cannot add this book.');
    }
    e.preventDefault();

}
