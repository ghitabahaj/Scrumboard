// import {tasks} from "./data.js";
// for(let i=0;i<tasks.length;i++){
// 	tasks[i].id1= i;
// }
var trackid = 1;
printtable();

function createTask() {
    // initialiser task form

    // Afficher le boutton save

    // Ouvrir modal form  
}

function saveTask() {
    // Recuperer task attributes a partir les champs input

    // Créez task object

    // Ajoutez object au Array

    // refresh tasks
	let form = document.forms['form_add'];
	let task = {
		title: form.title.value,
		type: form.type.value,
		priority: form.priority.value,
		status: form.status.value,
		date: form.date.value,
		description: form.description.value,
		id1: trackid

	}

	tasks.push(task);
	form.title.value="";
	form.date.value="";
	form.description.value="";
	form.priority.value="";
	printtable();
	
$('#modal-task').modal('hide');
// document.querySelector('#modal-task');
		Swal.fire(
  'Task Added!',
  'sucessfully!',
  'success'
)


}

function editTask(index) {
    // Initialisez task form
       
    // Affichez updates

    // Delete Button

    // Définir l’index en entrée cachée pour l’utiliser en Update et Delete

    // Definir FORM INPUTS

    // Ouvrir Modal form
}

function updateTask(id) {
    // GET TASK ATTRIBUTES FROM INPUTS
    // Créez task object
    // Remplacer ancienne task par nouvelle task
    // Fermer Modal form
    // Refresh tasks
	let form = document.forms['form_update'];
    for( t of tasks ){
		if(t.id1==id){
			t.title= form.title.value,
			t.type= form.type.value,
			t.priority= form.priority.value,
			t.status= form.status.value,
			t.date= form.date.value,
			t.description= form.description.value
		}
	}

    // let form = document.forms['form_update'];
	//  let task1 = {
	// 	title1: form.title.value,
	// 	type1: form.type.value,
	// 	priority1: form.priority.value,
	// 	status1: form.status.value,
	// 	date1: form.date.value,
	// 	description1: form.description.value
	// }    

	// 		tasks[i].title = task1.title1;
	// 		tasks[i].type = task1.type1;
	// 		tasks[i].priority = task1.priority1;
	// 		tasks[i].status= task1.status1;
	// 		tasks[i].date = task1.date1;
	// 		tasks[i].description = task1.description1;
	$('#modal-task-update').modal('hide');
	Swal.fire(
		'Task Updated!',
		'sucessfully!',
		'success'
	  )
	printtable();



}

function deleteTask() {

    //  tasks.splice(i,1);

    // Get index of task in the array

    // Remove task from array by index splice function

    // close modal form

    // refresh tasks
}

function initTaskForm() {
    // Clear task form from data

    // Hide all action buttons
}

function reloadTasks() {
    // Remove tasks elements

    // Set Task count
}

// function showid(id){

// 	alert(id);
// }


function showinput(id){
	let form1 = document.forms['form_update'];
     for( t of tasks ){
              if(t.id1==id){
				form1.title.value = t.title;
				form1.description.value=t.description;
				if(t.type === 'Bug'){
					form1.bug.checked = true ;
				}else{
					form1.feature.checked = true ;
				}
				form1.priority.value = t.priority;
				form1.date.value=t.date;
				form1.status.value=t.status;
			  }
	 }
	 document.getElementById("btnup").setAttribute('onclick', `updateTask(${id})`)
	 console.log(document.getElementById("btnup"))
}

// function clear(){
// 	form.title.value="";
// 	form.date.value="";
// 	form.description.value="";
// 	form.priority.value="";

// }

function clearform(){
	document.getElementById("to-do-tasks").innerHTML = "";
	document.getElementById("in-progress-tasks").innerHTML = "";
	document.getElementById("done-tasks").innerHTML = "";
	trackid = 1;

}

function printtable(){
	
	clearform();
    for( let i=0;i<tasks.length;i++){
     if(tasks[i].status==='To Do'){
     document.getElementById("to-do-tasks").innerHTML+=`
     <button id="${tasks[i].id1}" class="task col-xxl-12 col-md-12 col-sm-12 btn-light text-black border-bottom border-end-0 text-start w-100" data-bs-toggle="modal" data-bs-target="#modal-task-update" onclick="showinput(this.id);">
	<div class="row">
		<div class="col-1 my-3">
			<i class="bi bi-exclamation-circle text-red h2 "></i> 
		</div>
		<div class="col-11">
		<div class="m-2">
			<div class="fw-bold fs-3"> ${tasks[i].title}</div>
			<div class="">
				<div class="text-black-50">#${i+1} created in ${tasks[i].date} </div>
				<div class="" title="${tasks[i].description}">
				${tasks[i].description.substring(0, 80)} ...
				</div>
			</div>
			<div class="my-2">
				<span class="btn btn-primary">${tasks[i].priority}</span>
				<span class="btn btn-secondary"> ${tasks[i].type}</span>
			</div>
		</div>
	</div>
	</div>
	</button>
     `;
     
     }  
     

     if(tasks[i].status==='In Progress'){
        document.getElementById("in-progress-tasks").innerHTML+=`
        <button id="${tasks[i].id1}" class="task col-xxl-12 col-md-12 col-sm-12 btn-light text-black border-bottom border-end-0 text-start w-100" data-bs-toggle="modal" data-bs-target="#modal-task-update"  onclick="showinput(this.id)" >
			<div class="row">
			<div class="col-1 my-3">
				<i class="spinner-border spinner-border-sm text-green mx-2"></i> 
			</div>
			<div class="col-11">
			<div class="m-2">
				<div class="fw-bold fs-3">${tasks[i].title}</div>
				<div class="">
					<div class="text-black-50">#${i+1} created in ${tasks[i].date}</div>
					<div class="" title="${tasks[i].description}"> ${tasks[i].description.substring(0, 80)} ...</div>
				</div>
				<div class="my-2">
					<span class="btn btn-primary">${tasks[i].priority}</span>
					<span class="btn btn-secondary">${tasks[i].type}</span>
				</div>
			</div>
		</div>
		</div>
		</button>
        `;}

         if(tasks[i].status==='Done'){
        document.getElementById("done-tasks").innerHTML+=`
        <button id="${tasks[i].id1}"   class="task col-xxl-12 col-md-12 col-sm-12 btn-light text-black border-bottom border-end-0 text-start w-100" data-bs-toggle="modal" data-bs-target="#modal-task-update"  onclick="showinput(this.id)">
			<div class="row">
			<div class="col-1 my-3">
				<i class="bi bi-check-circle text-green h2"></i> 
			</div>
			<div class="col-11">
			<div class="m-2">
				<div class="fw-bold fs-3">${tasks[i].title}</div>
				<div class="">
					<div class="text-black-50">#${i+1} created in ${tasks[i].date}</div>
					<div class="" title="${tasks[i].description}"> ${tasks[i].description.substring(0, 80)} ...</div>
				</div>
				<div class="my-2">
					<span class="btn btn-primary">${tasks[i].priority}</span>
					<span class="btn btn-secondary">${tasks[i].type}</span>
				</div>
			</div>
		</div>
		</div>
		</button>
        `;
       
        
        } 
trackid+=1;
    } 
		
}

