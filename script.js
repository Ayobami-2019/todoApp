
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
        this.shadowRoot.appendChild(heading.content.cloneNode(true));
    }
    connectedCallback() {
        this.shadowRoot.querySelector("p").innerText=this.getAttribute("title");
    }
}

class ToDo extends RootComponent{
    constructor(){
        super();
        this.shadowRoot.appendChild(todo.content.cloneNode(true));
    }
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
    
        //add new item
    addValueSubmitted(){
        let getInputValue=this.shadowRoot.querySelector("input");
        let newInputField=this.shadowRoot.querySelector("#addInput");
        console.log(getInputValue.value);
        //this.shadowRoot.append(getInputValue.value);
        
        //getInputValue
        console.log(getInputValue);
        
        
        // this.shadowRoot.querySelector("input").value=""
        // let newToDoDiv=document.createElement("div");
        // newToDoDiv.classList.add("eachToDo");
        // let newLabel=`<label class="container">
        //     <input type="checkbox"  name="done" id="done">
        //     <span class="checkmark"></span>
        //     <p>${getInputValue.value}</p>
        // </label>`
        // console.log (newLabel)
        // let checkbox=document.createElement("input")
        // checkbox.innerHTML=newLabel
        // newToDoDiv.append(newLabel);
        // let newItem=document.createElement("p");
        // let newItemValue=getInputValue.value;
        // let pick=document.createElement("input[type:checkbox]");
        // console.log(pick)
        // newItem.textContent=newItemValue;
        // console.log(newItem);
        // //newToDoDiv.append(newLabel);
        // newToDoDiv.append(pick);
        // newToDoDiv.append(newItem);
        // this.shadowRoot.querySelector(".eachToDo").append(newToDoDiv);

        getInputValue.value=""
    } 

 
    toggleCancel(){
        console.log(123)
        this.showColor=!this.showColor;
        const cancel=this.shadowRoot.querySelector(".eachTodo")
        this.showCancel=!this.showCancel;
        this.shadowRoot.querySelectorAll(".cancel").forEach(item=>{
            if(this.showCancel){
                item.style.display ="block";
                
            } else{
                item.style.display ="none";

            }
        });
    }
    deleteItem(){
        this.remove()
    }
    // addNewToDo(){
        
    // }
    connectedCallback() {
        this.shadowRoot.querySelector(".eachToDo").addEventListener("click", () => this.toggleCancel());

        const cancel=this.shadowRoot.querySelector(".cancel");
        cancel.addEventListener("click", () =>this.deleteItem());
        this.shadowRoot.querySelector("#toggle-info").addEventListener("click", () => this.toggleInput());
        this.shadowRoot.querySelector("#addInput").addEventListener("click", () => this.addValueSubmitted());
        this.shadowRoot.querySelector("h1").innerText=this.getAttribute("title");
    }
}

class Sentence extends RootComponent{
    constructor(){
        super();
        this.shadowRoot.appendChild(sentence.content.cloneNode(true));
    }
    connectedCallback() {
        this.shadowRoot.getElementById("freq-head").innerText=this.getAttribute("title");
    }
}
class Frequency extends RootComponent{
    constructor(){
        super();
        this.shadowRoot.appendChild(frequency.content.cloneNode(true));
    }
    connectedCallback() {
    }
}
customElements.define("task-heading", TaskHeading);
customElements.define("to-do", ToDo);
customElements.define("sentence-div", Sentence);
customElements.define("frequency-div", Frequency);