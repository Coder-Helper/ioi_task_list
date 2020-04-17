const task = [
	{year: "2005", day: "1", name: "Mountain" 								,comp: 287.77},
	{year: "2010", day: "2", name: "Memory" 								,comp: 296.296},
	{year: "2005", day: "2", name: "Birthday" 								,comp: 311.864},
	{year: "2005", day: "2", name: "Rivers" 								,comp: 320},
	{year: "2009", day: "2", name: "Garage" 								,comp: 372.093},
	{year: "2010", day: "1", name: "Cluedo" 								,comp: 377.104},
	{year: "2005", day: "1", name: "Mean Sequence" 							,comp: 428.986},
	{year: "2009", day: "1", name: "Poi" 									,comp: 531.561},
	{year: "2005", day: "1", name: "Garden" 								,comp: 580.06},
	{year: "2006", day: "1", name: "Deciphering the Mayan Writing" 			,comp: 1120.57},
	{year: "2009", day: "1", name: "Raisins" 								,comp: 1315.61},
	{year: "2010", day: "2", name: "Traffic Congression" 					,comp: 1468.01},
	{year: "2018", day: "1", name: "Combo" 									,comp: 1767.16},
	{year: "2019", day: "1", name: "Arranging Shoes" 						,comp: 1933.53},
	{year: "2016", day: "1", name: "Detecting Molecules" 					,comp: 1935.06},
	{year: "2007", day: "2", name: "Miners" 								,comp: 2161.4},
	{year: "2013", day: "2", name: "Cave" 									,comp: 2193.98},
	{year: "2008", day: "1", name: "Type Printer" 							,comp: 2332.16},
	{year: "2011", day: "1", name: "Ricehub" 								,comp: 2508.25},
	{year: "2014", day: "2", name: "Gondola" 								,comp: 2533.76},
	{year: "2015", day: "2", name: "Horses" 								,comp: 2546.58},
	{year: "2011", day: "2", name: "Crocodile" 								,comp: 2574.26},
	{year: "2013", day: "1", name: "Dreaming" 								,comp: 2742.47},
	{year: "2015", day: "1", name: "Boxes with Souvenirs" 					,comp: 2807.45},
	{year: "2016", day: "2", name: "Paint by Number" 						,comp: 2818.18},
	{year: "2008", day: "2", name: "Linear Garden"							,comp: 2840.99},
	{year: "2006", day: "2", name: "The Valley of Mexico"					,comp: 2879.43},
	{year: "2003", day: "1", name: "Trail Maintenance" 						,comp: 2883.02},
	{year: "2012", day: "1", name: "Crayfish Scrivener" 					,comp: 2941.94},
	{year: "2014", day: "1", name: "Wall" 									,comp: 2945.34},
	{year: "2004", day: "2", name: "Phidias" 								,comp: 2955.33},
	{year: "2014", day: "1", name: "Game" 									,comp: 3086.82},
	{year: "2004", day: "2", name: "Farmer" 								,comp: 3106.53},
	{year: "2010", day: "1", name: "Quality of Living" 						,comp: 3138.05},
	{year: "2007", day: "1", name: "Alines" 								,comp: 3157.89},
	{year: "2016", day: "2", name: "Unscrambling a Messy Bug"				,comp: 3194.81},
	{year: "2009", day: "2", name: "Mecho" 									,comp: 3229.24},
	{year: "2015", day: "2", name: "Sorting" 								,comp: 3267.08},
	{year: "2006", day: "1", name: "Pyramid" 								,comp: 3347.52},
	{year: "2004", day: "1", name: "Hermes" 								,comp: 3353.95},
	{year: "2013", day: "2", name: "Robots" 								,comp: 3371.24},
	{year: "2017", day: "1", name: "Wiring" 								,comp: 3415.58},
	{year: "2019", day: "2", name: "Vision Program"							,comp: 3432.02},
	{year: "2012", day: "2", name: "Jousting Tournament" 					,comp: 3509.68},
	{year: "2011", day: "1", name: "Tropical Garden" 						,comp: 3524.75},
	{year: "2018", day: "2", name: "Mechanical Doll"					 	,comp: 3570.15},
	{year: "2009", day: "1", name: "Hiring"									,comp: 3601.33},
	{year: "2011", day: "1", name: "Race" 									,comp: 3617.16},
	{year: "2008", day: "2", name: "Teleporters" 							,comp: 3646.64},
	{year: "2017", day: "2", name: "The Big Prize" 							,comp: 3649.35},
	{year: "2007", day: "1", name: "Flood" 									,comp: 3663.16},
	{year: "2009", day: "2", name: "Salesman" 								,comp: 3707.64},
	{year: "2019", day: "1", name: "Rectangles" 							,comp: 3722.05},
	{year: "2004", day: "2", name: "Empodia" 								,comp: 3780.07},
	{year: "2014", day: "1", name: "Rail" 									,comp: 3781.35},
	{year: "2018", day: "1", name: "Werewolf"								,comp: 3797.01},
	{year: "2017", day: "2", name: "Ancient Books" 							,comp: 3805.19},
	{year: "2013", day: "1", name: "Art Class" 								,comp: 3826.09},
	{year: "2015", day: "1", name: "Teams" 									,comp: 3826.09},
	{year: "2007", day: "1", name: "Sails"									,comp: 3831.58},
	{year: "2014", day: "2", name: "Friend" 								,comp: 3832.8},
	{year: "2014", day: "2", name: "Holiday" 								,comp: 3858.52},
	{year: "2008", day: "1", name: "Islands"								,comp: 3872.79},
	{year: "2007", day: "2", name: "Pairs" 									,comp: 3873.68},
	{year: "2003", day: "2", name: "Seeing the Boundary" 					,comp: 3879.25},
	{year: "2012", day: "2", name: "Last Supper"							,comp: 3883.87},
	{year: "2015", day: "1", name: "Scales" 								,comp: 3888.2},
	{year: "2003", day: "2", name: "Amazing Robots" 						,comp: 3894.34},
	{year: "2011", day: "2", name: "Parrots" 								,comp: 3907.59},
	{year: "2015", day: "2", name: "Towns" 									,comp: 3913.04},
	{year: "2010", day: "2", name: "Saveit" 								,comp: 3919.19},
	{year: "2013", day: "2", name: "Game" 									,comp: 3919.73},
	{year: "2011", day: "2", name: "Elephants" 								,comp: 3920.79},
	{year: "2012", day: "2", name: "Ideal City" 							,comp: 3922.58},
	{year: "2019", day: "1", name: "Split the Attractions" 					,comp: 3927.49},
	{year: "2003", day: "1", name: "Comparing Code" 						,comp: 3939.62},
	{year: "2004", day: "1", name: "Artemis" 								,comp: 3945.02},
	{year: "2017", day: "1", name: "Toy Train" 								,comp: 3948.05},
	{year: "2017", day: "2", name: "Simurgh" 								,comp: 3948.05},
	{year: "2016", day: "1", name: "Roller Coaster Railroad" 				,comp: 3948.05},
	{year: "2007", day: "2", name: "Training" 								,comp: 3957.89},
	{year: "2013", day: "1", name: "Wombats" 								,comp: 3959.87},
	{year: "2009", day: "2", name: "Regions" 								,comp: 3960.13},
	{year: "2012", day: "1", name: "Pebbling Odometer" 						,comp: 3974.19},
	{year: "2019", day: "2", name: "Sky Walking" 							,comp: 3975.83},
	{year: "2003", day: "2", name: "Guess Which Cow" 						,comp: 3984.91},
	{year: "2006", day: "1", name: "Forbidden Subgraph" 					,comp: 3985.82},
	{year: "2006", day: "2", name: "Joining Points" 						,comp: 3985.82},
	{year: "2008", day: "1", name: "Fish" 									,comp: 3985.87},
	{year: "2004", day: "1", name: "Polygon" 								,comp: 3986.25},
	{year: "2016", day: "1", name: "Shortcut" 								,comp: 3987.01},
	{year: "2016", day: "2", name: "Aliens" 								,comp: 3987.01},
	{year: "2018", day: "2", name: "Highway Tolls" 							,comp: 3988.06},
	{year: "2018", day: "1", name: "Seats" 									,comp: 3988.06},
	{year: "2003", day: "1", name: "Reverse" 								,comp: 4000},	
	{year: "2006", day: "2", name: "A Black Box Game" 						,comp: 4000},
	{year: "2008", day: "2", name: "Pyramid Base" 							,comp: 4000},
	{year: "2010", day: "2", name: "Maze" 									,comp: 4000},
	{year: "2010", day: "1", name: "Hotter Colder" 							,comp: 4000},
	{year: "2010", day: "1", name: "Languages" 								,comp: 4000},
	{year: "2009", day: "1", name: "Archery" 								,comp: 4000},
	{year: "2017", day: "1", name: "Nowruz" 								,comp: 4000},
	{year: "2019", day: "2", name: "Broken Line" 							,comp: 4000},
	{year: "2018", day: "2", name: "Meetings" 								,comp: 4000}
]

let task_now = task;

function sort_arg(task, arg){
	let qwe = true;
	for (let i = 0; i < task.length - 1; i++){
		for (let j = i + 1; j < task.length; j++){
			if(task[i][arg] > task[j][arg]){
				qwe = false;
				let k = task[i];
				task[i] = task[j];
				task[j] = k;
			}
		}
	}
	if (qwe) task.reverse();
	return task;
}

function search(task, minn, maxx){
	taskk = []
	for (let i = 0; i < task.length; i++){
		if (task[i]["comp"] >= minn && task[i]["comp"] <= maxx){
			taskk.push(task[i]);
		}
	}
	return taskk;
}

const head = "<tbody><tr><th scope='col' width='40%' onclick=\"namesort('name')\">Name \
</th><th scope='col' onclick=\"namesort('year')\">Year</th><th scope='col' onclick=\"namesort('day')\"> \
  Day</th><th scope='col' onclick=\"namesort('comp')\">Complexity</th></tr></tbody>"

let func = (arg) => `<tr><td>${arg.name}</td><td>${arg.year}</td><td>${arg.day}</td><td>${arg.comp}</td></tr>`

task_now = sort_arg(task_now, "year");
task_now = sort_arg(task_now, "year");
const html = task.map(qwe => func(qwe)).join('')
document.querySelector('table').innerHTML += html

function namesort(arg){
	task_now = sort_arg(task_now, arg);
	const html = head + task_now.map(qwe => func(qwe)).join('')
	document.querySelector('table').innerHTML = html
}
function Search(){
	let minn_val = document.getElementById('val1').value;
	let maxx_val = document.getElementById('val2').value;
	if (minn_val || maxx_val){
		if(!minn_val || minn_val < 0){minn_val = 0;}
		if(!maxx_val || maxx_val > 4000){maxx_val = 4000;}
		task_now = search(task, minn_val, maxx_val);
	}
	else{
		task_now = task;
	}
	const html = head + task_now.map(qwe => func(qwe)).join('')
	document.querySelector('table').innerHTML = html
}