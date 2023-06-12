

function targetDistance(min,max,numTarget){
    yardArray = []
    min=parseInt(document.getElementById('minDistance').value, 10);
    max=parseInt(document.getElementById('maxDistance').value, 10);
    numTarget=parseInt(document.getElementById('numTargets').value, 10);
    list=document.getElementById('yardList');


//Check if input fields contain values -- call missingFields function of one field is missing 
    if(document.getElementById('maxDistance').value=='' || document.getElementById('numTargets').value == ''){
        missingFields()
    } else {
        resetFieldsMissing()
    }

    clearYards()

//Generate random numbers and push to array
    for (let i=0; i<numTarget; i++)
    {
        num= Math.random()*(max-min)+min;
        yardArray.push(num.toFixed(1))
    }

outputCol1 = (Math.ceil(yardArray.length/2))
outputCol2 = (Math.floor(yardArray.length/2))


//append random number arry to Ordered List nodes 
    textBox = document.createElement('input');
    tbl = document.getElementById('yardTable');

    var cHeader = tbl.createTHead();
    var row = cHeader.insertRow(0);
    var cell3 = row.insertCell(0);
    cell3.innerHTML = 'Score'
    var cell2 = row.insertCell(0);
    cell2.innerHTML = 'Yardage'
    var cell1 = row.insertCell(0);
    cell1.innerHTML = 'Target #'

    //create rows

    for(i=0; i<yardArray.length; i++){
        var row = document.createElement('tr');
        // create columns
            var cell1 = document.createElement('td')
            cell1.textContent = i+1+".";
            row.appendChild(cell1)
            var cell2 = document.createElement('td')
            cell2.textContent = yardArray[i];
            row.appendChild(cell2)
            var cell3 = document.createElement('td')
            var textBox = document.createElement('input');
            textBox.setAttribute('inputmode', 'numeric')
            cell3.appendChild(document.createElement('input'))
            row.appendChild(cell3);


            tbl.appendChild(row)
    }
}


//remove existing generated yard list
function clearYards(){

    var table = document.getElementById('yardTable');
    table.innerHTML=''
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




