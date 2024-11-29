class DomHelper {
  static clearEventListeners(element) {
    const clonedEle = element.cloneNode(true);
    element.replaceWith(clonedEle);
    return clonedEle;
  }

  static moveElement(elementId, newDestinationSelector) {
    const ele = document.getElementById(elementId);
    const destinationEle = document.querySelector(newDestinationSelector);
    destinationEle.append(ele);
  }
}

class Component {
  constructor(hostElementId, insertBefore = false) {
    if (hostElementId) {
      this.hostElement = document.getElementById(hostElementId);
    } else {
      this.hostElement = document.body;
    }
    this.insertBefore = insertBefore;
  }
  detach = () => {
    //instead of bind we can use arrow function
    if (this.element) {
      this.element.remove();
    }
  };

  attach() {
    this.hostElement.insertAdjacentElement(
      this.insertBefore ? 'afterbegin' : 'beforeend',
      this.element
    );
  }
}

class Tooltip extends Component {
  constructor(closeNotifierFunction) {
    //super('active-projects',true);
    super();
    this.closeNotifier = closeNotifierFunction;
    this.create();
  }

  closeToolTip = () => {
    this.detach();
    this.closeNotifier();
  };

  create() {
    const tooltipEle = document.createElement('div');
    tooltipEle.className = 'card';
    tooltipEle.textContent = 'dummy';
    tooltipEle.addEventListener('click', this.detach);
    this.element = tooltipEle;
  }
}

class ProjectItem {
  hasActiveTooltip = false;
  constructor(id, updateProjectList, type) {
    this.id = id;
    this.connectSwitchButton();
    this.updateProjectListHandler = updateProjectList;
    this.connectMoreInfoButton(type);
  }

  showMoreInfoHandler() {
    if (this.hasActiveTooltip) {
      return;
    }
    const toolTip = new ToolTip(() => {
      this.hasActiveTooltip = false;
    });
    toolTip.attach();
    this.hasActiveTooltip=true;
  }

  connectMoreInfoButton() {
    const projectItemElement = document.getElementById(this.id);
    const moreInfoBtn = projectItemElement.querySelector(
      'button:first-of-type'
    );
    moreInfoBtn.addEventListener('click', this.showMoreInfoHandler);
  }

  connectSwitchButton(type) {
    const projectItemElement = document.getElementById(this.id);
    let switchButton = projectItemElement.querySelector('button:last-of-type');
    switchButton = DomHelper.clearEventListeners();
    switchButton.textContent = type === 'active' ? 'Finished' : 'Activate';
    switchButton.addEventListener(
      'click',
      this.updateProjectListHandler.bind(null, this.id)
    );
  }
  update(updateProjectListsFn, type) {
    this.updateProjectListHandler = updateProjectListsFn;
    this.connectSwitchButton(type);
  }
}

class ProjectList {
  projects = [];
  constructor(type) {
    this.type = type;
    const projectItems = document.querySelectorAll(`#${type}-projects li`);
    //console.log(projectItems);
    for (const projectItem of projectItems) {
      this.projects.push(
        new ProjectItem(
          projectItem.id,
          this.switchProject.bind(this),
          this.type
        )
      );
    }
    console.log(this.projects);
  }

  setSwitchHandlerFunction(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction;
  }

  addProject(project) {
    //console.log(this);
    console.log(project);
    this.projects.push(project);
    DomHelper.moveElement(project.id, `#${this.type}-projects ul`);
    project.update(this.switchProject.bind(this), this.type);
  }

  switchProject(projectId) {
    // const projectIndex=this.projects.findIndex(p=>p.id===projectId)
    // this.projects.splice(pr);

    this.switchHandlerFunction(this.projects.find((p) => p.id === projectId));
    this.projects.filter((a) => a.id !== projectId);
  }
}

class App {
  static init() {
    const activeProjectLists = new ProjectList('active');
    const finishedProjectItems = new ProjectList('finished');
    activeProjectLists.setSwitchHandlerFunction(
      finishedProjectItems.addProject.bind(finishedProjectItems)
    );
    finishedProjectItems.setSwitchHandlerFunction(
      activeProjectLists.addProject.bind(activeProjectLists)
    );
  }
}

App.init();
