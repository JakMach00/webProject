import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import Project from './project.ts'
import ProjectApi from './projectApi.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

const project = new Project('test', 'test desc');
console.log(project)
const project1 = new Project('test2', 'testowy');
const project2 = new Project('ts-proj', 'do website ts');
const project3 = new Project('c płotek projekt', 'console project in c płotek');
const project4 = new Project('java', 'nie, java nie');

ProjectApi.createProject(project);
ProjectApi.createProject(project1);
ProjectApi.createProject(project2);
ProjectApi.createProject(project3);
ProjectApi.createProject(project4);

console.log(ProjectApi.getAllProjects());

ProjectApi.updateProject('f3e4e140-b1c7-4c68-b9bc-cab0eb25192a', 'Nowy testowy name', 'Brak zmiany opisu, to też opis')

ProjectApi.updateProject('60b01a9e-abd2-4241-bb50-7df61a64e6dc', 'Nowa nazwa, czas na cska', '')