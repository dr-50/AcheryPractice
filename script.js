
function targetDistance(min,max,numTarget){
    console.log('called')
    min=parseInt(document.getElementById('minDistance').value, 10);
    max=parseInt(document.getElementById('maxDistance').value, 10);
    numTarget=parseInt(document.getElementById('numTargets').value, 10);
    yardArray = []


//Check if input fields contain values -- call missingFields function of one field is missing 
    if(document.getElementById('maxDistance').value=='' || document.getElementById('numTargets').value == ''){
        missingFields()
    } else {
        resetFieldsMissing()
    }
//Check if generated yard list already exists on the screen -- call clearYards if true
    yardList = document.getElementById('yardList')
    if(yardList!=null){
        clearYards()
    }

//Generate random numbers and push to array
    for (let i=0; i<numTarget; i++)
    {
        num= Math.random()*(max-min)+min;
        yardArray.push(num.toFixed(1))
    }

outputCol1 = (Math.ceil(yardArray.length/2))
outputCol2 = (Math.floor(yardArray.length/2))
console.log(outputCol1)
console.log(outputCol2)
console.log(yardArray)

//append random number arry to Ordered List nodes 
    list=document.getElementById('yardList');

    for (i=0; i<outputCol1; i++){
        var li = document.createElement('li');
        li.innerText = yardArray[i];
        list.appendChild(li)
    }

    list2=document.getElementById('yardList2')
    list2.start=outputCol2+1
    for (i=outputCol1; i<yardArray.length; i++){
        var li = document.createElement('li');
        li.innerText = yardArray[i];
        list2.appendChild(li)
    }
}

//remove existing generated yard list
function clearYards(){
    yardList = document.getElementById('yardList')
    yardList.innerHTML = '';
    yardList2 = document.getElementById('yardList2')
    yardList2.innerHTML = '';
}

//Format input fields to indicate missing value
function missingFields(){
    alert('please enter all required fields')
    if(document.getElementById('maxDistance').value==''){
        document.getElementById('maxDistance').className = document.getElementById('maxDistance').className + 'error'   
    }
    if(document.getElementById('numTargets').value==''){
        document.getElementById('numTargets').className = document.getElementById('numTargets').className + 'error'     
    }
}

//Reset input fields to default formatting 
function resetFieldsMissing(){
    document.getElementById('maxDistance').className = document.getElementById('maxDistance').className.replace('error', '')
    document.getElementById('numTargets').className = document.getElementById('numTargets').className.replace('error', '')     

}