

function Transcribe(){
    console.log("triggered");
    const openaiApiKey = "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";
    const audioFile = document.getElementById("audio-file-input").files[0];

    const formData = new FormData();
    formData.append("model", "whisper-1");
    formData.append("audio", audioFile);

    fetch("https://localhost:3000/", {
    method: "POST",
    // headers: {
    //     "Authorization": `Bearer ${openaiApiKey}`,
    //     "X-Requested-With": "XMLHttpRequest"
    // },
    body: formData,
    })
    .then(response => response.json())
    .then(data => console.log(data.transcription))
    .catch(error => console.error(error));
}
async function poster(){
    let res = "";
    let response = await fetch("http://127.0.0.1:3000/", {
        method: "GET"
        });
    try{
        res = Promise.resolve(response.text());
        res.then(value => {
            console.log(value);
    })}
    catch(error){
        res="something went wrong";
        console.log(res);
    }
        
}