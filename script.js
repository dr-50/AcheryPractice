
function targetDistance(min,max,numTarget){
    yardArray = []
    min=20
    max=40
    numTarget=20
    console.log('function called')
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
