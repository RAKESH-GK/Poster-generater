function generate() {
    var val1=document.getElementById('input1').value;
    var val2=document.getElementById('input2').value;
    var val3=document.getElementById('salary').value;
    if(val1=="" || val2=="" ||val3==""){
        alert("fill all blocks to generate poster");
    }else{
    document.getElementById("render_main").style.display="block";
    document.getElementById("form").style.display="none";
    document.getElementById("gen_footer").style.display="block";
    document.getElementById("render").innerHTML="";
    html2canvas(document.querySelector("#capture")).then(canvas => {
    document.getElementById("render").appendChild(canvas);
    });
    }
}
function edit(){
    document.getElementById("render_main").style.display="none";
    document.getElementById("form").style.display="block";
    document.getElementById("gen_footer").style.display="none";
}

function download() {
    const download = document.getElementById("download");
    let image = document.querySelector("canvas").toDataURL("image/png")
                        .replace("image/png", "image/octet-stream");
    download.setAttribute("href", image);
}

document.querySelector("textarea").addEventListener('keyup', function(){
    const quoteText = document.getElementById("quote__text");

    if(this.value != ""){
        quoteText.innerHTML = this.value;
        renderCanvas();
    }
    else {
        quoteText.innerHTML = "Job role and company name display here";
    }
    
});

document.querySelector("input").addEventListener('keyup', function(){
    const name = document.getElementById("candidate_name");

    if(this.value!= ""){
        name.innerHTML = this.value;
        renderCanvas();
    }
    else {
        name.innerHTML = "Candidate name";
    }
    
});

document.getElementById("salary").addEventListener('keyup', function(){
    const salary = document.getElementById("package");

    if(this.value != ""){
        salary.innerHTML = this.value;
        renderCanvas();
    }
    else {
        salary.innerHTML = "salary";
    }
    
});
function re_set(){
    window.location.reload();
}



//photo upload section

const imgDiv = document.querySelector('.profile-pic-div');
        const img = document.querySelector('#photo');
        const file = document.querySelector('#file');
        const uploadBtn = document.querySelector('#uploadBtn'); 

        imgDiv.addEventListener('mouseenter', function() {
            uploadBtn.style.display = "block";
        });

       

        imgDiv.addEventListener('mouseleave', function() {
            uploadBtn.style.display = "none";
        });

        file.addEventListener('change', function() {
            //this refers to file
            const choosedFile = this.files[0];

            if (choosedFile) {

                const reader = new FileReader();
                reader.addEventListener('load', function() {
                    img.setAttribute('src', reader.result);
                });

                reader.readAsDataURL(choosedFile);
            }
        });