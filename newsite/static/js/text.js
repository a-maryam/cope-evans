// hashmap for word occurrence
morris_data = [];
var words = new Map();
var length = 624;
var actual_words = []; // will contain
var occurrences = [];
function preload() {
    morris_data = loadJSON(morris_url);
}

var spl = []; // for word splitting
function setup() {
    console.log(morris_data[0]);
 
    for(var i=0; i < length; i++) {
        if (!isEmpty(morris_data[i])) {
	    try {
		spl = morris_data[i]['subjec'].split(";");
		for(var v = 0; v < spl.length; v++) {
		    if (!words.has(spl[v])) {
			words.set(spl[v], 1);
		    }
		    else {
			words.set(spl[v], words.get(spl[v]) + 1);
			//console.log(words.get(spl[v]));
		    }
		}
	    }
	    catch(TypeError) {
		continue;
	    }
	}
    }

    console.log(words);
    console.log(words.length);
    var iterator1 = words.keys();
    for(var j = 0; j < 530; j++) {
	try {
	    actual_words.push(iterator1.next().value);
	    occurrences.push(words.get(iterator1.next().value));
	}
	catch {
	    continue;
	}
    }
    
    console.log(actual_words);
   // var newArray = associativeQsort(actual_words, appearances, 0, 530);
    //console.log(newArray);
    

    new Chart(document.getElementById("bar-chart"), {
	type: 'bar',
    data: {
	labels: actual_words,
      datasets: [
        {
          label: "Number of appearances",
          //backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: occurrences,
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Subject tags in J. Morris Evans documents (mainly letters)'
      }
    }
    });
}

    function isEmpty(obj) {
        if (obj.hasOwnProperty('subjec') && obj['subjec']) {
	    //console.log('success');
	    return false;
	    }
	    return true;
    }
// will sort wrt to appearances and maintain associativity
// Apparently there's no way to sort hashmaps wrt to Value.
function associativeQSort(words1, appearances, left, right) {
    var length = words1.length;
    var pivot;
    var part;
    
    if(left < right) {
	pivot = right;
	part = partition(words1, appearances, pivot, left, right);
	associativeQSort(words1, appearances, left, part - 1);
	associativeQSort(words1, appearances, part + 1, right)
    }
    
    return [
	words1,
	appearances
    ];
}

function partition(words1, appearances, pivot, left, right) {
    var pivotValue = appearances[pivot];
    var partitionIndex = left;
    for(var i = left; i < right; i++) {
	if(appearances[i] < pivotValue) {
	    swap(words1, appearances, i, partitionIndex);
	    partitionIndex++;
	}
    }
    swap(words1, appearances, right, partitionIndex);
    return partitionIndex;
}


function swap(words1, appearances, i, j) {
    var numTemp = appearances[i];
    var wordTemp = words1[i];
    appearances[i] = appearances[j];
    appearances[j] = numTemp;
    words1[i] = words1[j];
    words1[j] = wordTemp;
}
