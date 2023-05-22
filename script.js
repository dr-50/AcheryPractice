
function targetDistance(min,max,numTarget){
    yardList = document.getElementById('yardList')
    if(yardList!=null){
        clearYards()
    }

    yardArray = []
    min=parseInt(document.getElementById('minDistance').value, 10);
    max=parseInt(document.getElementById('maxDistance').value, 10);
    numTarget=parseInt(document.getElementById('numTargets').value, 10);
    for (let i=0; i<numTarget; i++)
    {
        num= Math.random()*(max-min)+min;
        yardArray.push(num.toFixed(1))
    }

    list=document.getElementById('yardList');
    for (i=0; i<yardArray.length; i++){
        var li = document.createElement('li');
        li.innerText = yardArray[i];
        list.appendChild(li)
    }
}


function clearYards(){
    yardList = document.getElementById('yardList')
    yardList.innerHTML = '';
}