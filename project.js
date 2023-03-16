//profile scroller variables
const projectName = document.getElementById('project-name');
const projectImg = document.getElementById('projectimg');
const description = document.getElementById('description');
const list = document.getElementById('list');
const nextBtn = document.getElementById('next');


//fetch project scroller data
class Project{
  getProject(){
      return new Promise((resolve, reject) => {
        fetch('projectdata.json')
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
      })}
}


//instantiate project constructor
const projects = new Project();

//call getproject function
 projects.getProject()
.then(data => { 

  //projectInterator
function projectIterator(pro){
  let projectIndex = 0;

  return{
    next: function(){
      return projectIndex < pro.length ?
      {value: pro[projectIndex++], done: false}:
      {done: true}
    }
  }
}

//set data as array for projectIterator
let pros = projectIterator(data);

//addeventlistener for next btn
nextBtn.addEventListener('click', nextProject);


nextProject();

function nextProject(){

let currentProject = pros.next().value;

if( currentProject !== undefined){

projectName.innerText = currentProject.projectname;
projectImg.setAttribute('src', currentProject.image);
description.innerText = currentProject.description;
list.innerHTML = `
<li><strong>Technologies:</strong> ${currentProject.technologies}</li><hr>
<li><strong>Responsiveness:</strong> ${currentProject.responsiveness}</li>`;
} else  {
window.location.reload()
}}
});

