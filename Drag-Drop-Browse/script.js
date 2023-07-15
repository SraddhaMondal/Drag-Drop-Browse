const dragArea = document.querySelector('.drag-area');
const dragText = document.querySelector('.header');

let button = document.querySelector('.button');
let input = document.querySelector('input');

let file;

button.onclick = () => {
    input.click();
};

input.addEventListener('change',function() {
 file= this.files[0];
dragArea.classList.add('active');
displayFile();
});

dragArea.addEventListener('dragover',(event) => {
    event.preventDefault();
dragText.textContent = 'Release to Upload';
dragArea.classList.add('active');

});

dragArea.addEventListener('dragleave',() => {
    dragText.textContent = 'Drag & Drop';
    dragArea.classList.remove('active');

});

    dragArea.classList.remove('active');

    dragArea.addEventListener('drop',(event) => {
    event.preventDefault();

      file= event.dataTransfer.files[0];
      displayFile();
    });

    function displayFile(){
    let fileType = file.type;

let validExtensions = ['image/jpeg', 'image/jpg' , 'image/npg'];
if(validExtensions.includes(fileType)){
    let fileReader = new FileReader();

    fileReader.onload= ()=> {
        let fileURL =fileReader.result;
    
        let imgTag ='<img src="${fileURL}" alt="">';
        dragArea.innerHTML= imgTag;
    };
    fileReader.readAsDataURL(file);
}else{
    alert('This file is not an Image');
    dragArea.classList.remove('active');
}

};