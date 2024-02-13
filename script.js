
class RootComponent extends HTMLElement{
    constructor(){
        super();
        //Initialization of shadow
        this.attachShadow({mode:"open"});
    }
}

class TaskHeading extends RootComponent{
    constructor(){
        super();
        //append template to class
        this.shadowRoot.appendChild(heading.content.cloneNode(true));
    }
    connectedCallback() {
        this.shadowRoot.querySelector("p").innerText=this.getAttribute("title");
    }
}

class ToDo extends RootComponent{
    constructor(){
        super();
        //append template to class
        this.shadowRoot.appendChild(todo.content.cloneNode(true));
    }
    //let plus icon open an input field
    toggleInput(){
        console.log(123)
        this.showInfo=!this.showInfo;
        const input=this.shadowRoot.querySelector("#input");
        console.log(input)
        // const togglebTN = this.shadowRoot.querySelector("#toggle-info");
    
        
        if(this.showInfo){
            input.style.display ="block";
            // togglebTN.innerText="Show Info"
        } else{
            input.style.display ="none";
            // togglebTN.innerText="Hide Info"
        }
    };
    
        //add new item method
    addValueSubmitted(){
        let getInputValue=this.shadowRoot.querySelector("input");
        let scroll=this.shadowRoot.querySelector(".todoDiv");
        //console.log(getInputValue.value);
    
        
        //getInputValue and append to the existing list
        console.log(getInputValue.value);
        let inputValue=getInputValue.value
        console.log (inputValue)
        this.shadowRoot.querySelector("input").value
        let newToDoDiv=document.createElement("div");
        newToDoDiv.classList.add("eachToDo");
        newToDoDiv.innerHTML=
        `
        <label class="container">
            <input type="checkbox"  name="done" id="done">
            <span class="checkmark"></span>
        </label>
        <p>${inputValue}</p>
        `
        console.log (newToDoDiv)
        this.shadowRoot.querySelector(".todoDiv").append(newToDoDiv);
        scroll.scrollIntoView()

        getInputValue.value=""
    } 
    // method to add or remove a selected item
    todoAddRemove () {
        let item= this.shadowRoot.querySelectorAll(".eachToDo");
        console.log(item)
        let cancel= this.shadowRoot.querySelectorAll(".eachToDo .cancel");
        console.log(cancel)
        for(let i=0; i<item.length; i++){
            item[i].onclick= function(){
                this.showCancel=!this.showCancel;
                if(this.showCancel){
                    cancel[i].style.display ="block";
                } else{
                    cancel[i].style.display ="none";
                } 
            }
        }
        for(let i=0; i<cancel.length; i++){
            cancel[i].onclick= function(){
                item[i].remove()
            }
        }
    }
    // CHECKBOX LIST WITH PROGRESS BAR AND LOCAL STORAGE
    progressBar(){
        
        let checkboxinputs = this.shadowRoot.querySelectorAll("input[type='checkbox']");
        console.log(checkboxinputs)
        let progressbar = this.shadowRoot.querySelector('.bar');
        console.log(progressbar)
        let progressValue = this.shadowRoot.querySelector('.barDiv p');
        console.log(progressValue)
        let checked=this.shadowRoot.querySelectorAll('input[type="checkbox"]:checked');
        console.log(checked)
        let initialprogressNum=((checked.length/checkboxinputs.length) * 100) +"%";
        console.log(initialprogressNum);
        let initialprogress = Math.round((checked.length/checkboxinputs.length) * 100);
        let initialprogresspercentage = initialprogress+ '% Complete';
        if (initialprogressNum === 100) {
           // progressbar.style.backgroundColor = "#b3b3ef";
            progressbar.style.backgroundColor = "green";
            //progressbar.style.backgroundColor = "red";
        }
        else {
            progressbar.style.backgroundColor = "#b3b3ef";
        };
        progressbar.style.width = initialprogressNum;
        progressValue.innerHTML = initialprogresspercentage;

        for ( let i = 0, len = checkboxinputs.length; i < len; i++ ) {
            console.log("hii")
            // initialize local storage for each checkbox
            // let box = checkboxinputs[i];
            // if (box.hasAttribute("id")) {
            //     console.log("hello")
            //     this.setupLocalStorage(box);
            // }
            //event listener to detect checkbox changes
            checkboxinputs[i].onclick= function(e){
                console.log("hii")
                //this.checked();

                //calculate total number of checked boxes
                
                console.log("hii")
                let checkedboxes = 0;
                for ( let i = 0, len = checkboxinputs.length; i < len; i++ ) {
                    if (checkboxinputs[i].checked) {
                        checkedboxes++;
                    };
                } 
                let progressNum = ((checkedboxes / checkboxinputs.length) * 100);
                let progresspercentage = ((checkedboxes/ checkboxinputs.length) * 100) + "%";
                let roundpercentage = Math.round((checkedboxes / checkboxinputs.length) * 100) + "% Complete";
                //this.updateProgressbar();
                // Updating the progress bar
                if (progressNum === 100) {
                    // progressbar.style.backgroundColor = "#b3b3ef";
                     progressbar.style.backgroundColor = "green";
                     //progressbar.style.backgroundColor = "red";
                 }
                 else {
                     progressbar.style.backgroundColor = "#b3b3ef";
                 };

                progressbar.style.width = progresspercentage;
                progressValue.innerHTML = roundpercentage;
            };
        };
    };

    connectedCallback() {
        
        // methods call back
        this.shadowRoot.querySelector("#toggle-info").addEventListener("click", () => this.toggleInput());
        this.shadowRoot.querySelector("#addInput").addEventListener("click", () => this.addValueSubmitted());
        this.shadowRoot.querySelector("h1").innerText=this.getAttribute("title");
        this.todoAddRemove ();
        this.progressBar();
    
        // INIT PROGRESS BAR 
        // checked();
        // updateProgressbar();
        // setupLocalStorage(box)
    }
}

class Sentence extends RootComponent{
    constructor(){
        super();
        //append template to class
        this.shadowRoot.appendChild(sentence.content.cloneNode(true));
    }
    connectedCallback() {
        this.shadowRoot.getElementById("freq-head").innerText=this.getAttribute("title");
    }
}
class Frequency extends RootComponent{
    constructor(){
        super();
        //append template to class
        this.shadowRoot.appendChild(frequency.content.cloneNode(true));
    }
    connectedCallback() {
    }
}
customElements.define("task-heading", TaskHeading);
customElements.define("to-do", ToDo);
customElements.define("sentence-div", Sentence);
customElements.define("frequency-div", Frequency);