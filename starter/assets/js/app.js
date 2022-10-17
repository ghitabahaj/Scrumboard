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
   









    
}

function editTask(index) {
    // Initialisez task form

    // Affichez updates

    // Delete Button

    // Définir l’index en entrée cachée pour l’utiliser en Update et Delete

    // Definir FORM INPUTS

    // Ouvrir Modal form
}

function updateTask() {
    // GET TASK ATTRIBUTES FROM INPUTS

    // Créez task object

    // Remplacer ancienne task par nouvelle task

    // Fermer Modal form

    // Refresh tasks
    
}

function deleteTask() {
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

function printtable(){
    for( let i=0;i<tasks.length;i++){

     if(tasks[i].status==='To Do'){
     document.getElementById("to-do-tasks").innerHTML+=`
     <button class="col-xxl-12 col-md-12 col-sm-12 btn-light text-black border-bottom border-end-0 text-start w-100" >
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
										<span class="btn btn-primary">High</span>
										<span class="btn btn-secondary">Feature</span>
									</div>
								</div>
							</div>
							</div>
							</button>
     `;
     
     }  
     

     if(tasks[i].status==='In Progress'){
        document.getElementById("in-progress-tasks").innerHTML+=`
        <button class="col-xxl-12 col-md-12 col-sm-12 btn-light text-black border-bottom border-end-0 text-start w-100">
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
										<span class="btn btn-primary">High</span>
										<span class="btn btn-secondary">Bug</span>
									</div>
								</div>
							</div>
							</div>
					        </button>
        `;}

         if(tasks[i].status==='Done'){
        document.getElementById("done-tasks").innerHTML+=`
        <button class="col-xxl-12 col-md-12 col-sm-12 btn-light text-black border-bottom border-end-0 text-start w-100">
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
										<span class="btn btn-primary">High</span>
										<span class="btn btn-secondary">Bug</span>
									</div>
								</div>
							</div>
							</div>
							</button>
        `;
        
        
        } 

    }
}

