

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
            textBox.value = '10'
            textBox.setAttribute('inputmode', 'numeric')
            cell3.appendChild(textBox)
            row.appendChild(cell3);

            var cell4 = document.createElement('td');
            var minusBtn = document.createElement('button');
            minusBtn.setAttribute('onclick', 'minusScore(this)')
            minusBtn.innerHTML = '-'
            cell4.appendChild(minusBtn);
            row.appendChild(cell4)

            var cell5 = document.createElement('td');
            var plusBtn = document.createElement('button');
            plusBtn.setAttribute('onclick', 'plusScore(this)');
            plusBtn.innerHTML = '+'
            cell5.appendChild(plusBtn);
            row.appendChild(cell5);

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

function minusScore(element){
    // alert('row ' + element.parentNode.parentNode.rowIndex)
    console.log('row ' + element.parentNode.parentNode.rowIndex);

    // get row number of button clicked
    var rowNum = element.parentNode.parentNode.rowIndex;
    cell = document.getElementById('yardTable').rows[rowNum].cells;
    // console.log(cell[2].innerHTML)
    // cell[2].value='8'

    inputValue = document.getElementById('yardTable').rows[rowNum].cells[2].getElementsByTagName('input')[0]//.value
    // console.log('input value: ' + inputValue)
    switch(inputValue.value){
        case '10':
            inputValue.value='8';
            break;
        case '8': 
            inputValue.value='5';
            break;
        case '5':
            inputValue.value='0';
            break;
        case '0': 
            inputValue.value='0';
            break;
        case '14':
            inputValue.value='12';
            break
        case '12':
            inputValue.value='10';
        
    }
    // inputValue.value='8'
}

function plusScore(element){
    // alert('row ' + element.parentNode.parentNode.rowIndex)

    var rowNum = element.parentNode.parentNode.rowIndex;
    cell = document.getElementById('yardTable').rows[rowNum].cells;
    // console.log(cell[2].innerHTML)

    inputValue = document.getElementById('yardTable').rows[rowNum].cells[2].getElementsByTagName('input')[0]//.value

    switch(inputValue.value){
        case '10':
            inputValue.value='12';
            break;
        case '8': 
            inputValue.value='10';
            break;
        case '5':
            inputValue.value='8';
            break;
        case '0': 
            inputValue.value='5';
            break;
        case '12':
            inputValue.value='14';
            break;
        case '14':
            inputValue.value='14';
        
    }
}

