
function targetDistance(min,max,numTarget){
    yardArray = []
    min=parseInt(document.getElementById('minDistance').value, 10);
    max=parseInt(document.getElementById('maxDistance').value, 10);
    numTarget=parseInt(document.getElementById('numTargets').value, 10);
    console.log('function called')
    console.log(typeof min)
    console.log(max)
    console.log(numTarget)
    for (let i=0; i<numTarget; i++)
    {
        num= Math.random()*(max-min)+min;
        console.log(num.toFixed(1))
        yardArray.push(num.toFixed(1))
    }

    list=document.getElementById('yardList');
    for (i=0; i<yardArray.length; i++){
        var li = document.createElement('li');
        li.innerText = yardArray[i];
        list.appendChild(li)
    }

    console.log(yardArray)
}


function clearYards(){
    yardList = document.getElementById('yardList')
    yardList.innerHTML = '';
}