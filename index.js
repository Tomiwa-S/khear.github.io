const link = document.createElement("a");
function createFile(){
    var input = document.getElementById("audio-text"); 
    var content = input.innerHTML;
    localStorage.setItem('data', JSON.stringify(content));
    console.log(content)
    const file = new Blob([content], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
}
function downloadFile(){
    var content =JSON.parse(localStorage.getItem('data'));
    const file = new Blob([content], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    link.download = document.getElementsByClassName("save-title")[0].innerHTML;;
    link.click();
    URL.revokeObjectURL(link.href);
}






