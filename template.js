//definition of the templates
const heading=document.createElement('template');
const progress=document.createElement('template');
const todo=document.createElement('template');
const frequency=document.createElement('template');
const sentence=document.createElement('template');

heading.innerHTML=`
    <style>
        
        .head{
            display: flex;
            flex-direction: row;
            gap: 10px;
            color: #666565;
            align-items: center;
            font-size: 20px;
            // width: 100%;
            // height: 100px;
            // background: red;
        }
        
    </style>
    <div class="headingContainer">
        <div class="head">
            <svg xmlns="http://www.w3.org/2000/svg" height="10" width="25" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#8989c3" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
            <p></p>
        </div>
    </div>`

todo.innerHTML=`
    <style>
        .progressContainer{
            display: flex;
            flex-direction: column;
            color: #babaf0;
            font-size: 24px;
        }
        .add{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            color: #babaf0;
            align-items: center;
        }
        .add h1{
            color:#777777;
            font-weight: lighter;
            font-size:30px;
        }
        .add svg{
            padding: 7px;
            border: 1px solid #babaf0;
            border-radius: 50%;
        }
        #input{
            display: flex;
            flex-direction: row;
            align-items: center;
            width: 100%;
            color: #babaf0;
            padding: 0 0 20px 0;
            display: none;
            position: relative
            
        }
        #input input{
            border: none;
            outline:none;
            padding: 7px;
            font-size: 18px;
        }
        #input input:focus{
            border: none;
            outline: none;
        }
        #input button{
            padding: 7px 20px;
            border-radius: 10px;
            border:none;
            outline:none;
            background: #b5ea81;
            position: absolute;
            right: 0;
            font-size: 18px;
            color: #666565;
        }
        .barDiv{
            display: flex;
            flex-direction: column;
            width: 100%;
            color: #babaf0;
            
        }
        .bar{
            border: 1px solid #babaf0;
            border-radius: 10px;
            width: 100%;
            padding: 10px 0 !important;
        }
        .barDiv p{
            text-align: center;
        }


        .todoDiv{
            display: flex;
            flex-direction: column;
            gap: 20px;
            color: #666565;
            font-size: 20px;
        }
        .eachToDo{
            display: flex;
            flex-direction: row;
            align-items: center;
            cursor: pointer;
            position: relative;
        }
        .eachToDo p{
            display: flex;
            flex-direction: row;
            align-items: center;
        }
        .eachTodo input, .eachTodo input span{
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .cancel{
            position: absolute;
            right: 0;
            color: #b5ea81;
            display: none;
        }
       
        .container {
            display: flex;
            flex-direction: column;
            justify-content:center;
            align-items: center;
            position: relative;
            padding-left: 35px;
            margin-bottom: 12px;
            cursor: pointer;
            font-size: 22px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            height: 10px;
        }
        .container input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
            
        }
        .checkmark {
            position: absolute;
            top: 0;
            left: 0;
            height: 20px;
            width: 20px;
            border-radius: 50%;
            border: 2px solid #b5ea81;
            
        }
        .container input:checked ~ .checkmark {
            background: #b5ea81;
          }
        .checkmark:after {
            content: "";
            position: absolute;
            //display: none;
        }
         
        .container input:checked ~ .checkmark:after {
            display: block;
          }
        .container .checkmark:after {
            left: 6px;
            top: 3px;
            width: 5px;
            height: 10px;
            border: solid #ffffff;
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
            //background: #b5ea81;
            // width: 20px;
            //  height: 20px;
            // border-radius: 50%;
          }
        //   ::slotted{
        //     display:flex;
        //   }
    </style
    <div class="progressContainer">
        <div class="add">
            <h1></h1>
            <svg id="toggle-info" xmlns="http://www.w3.org/2000/svg" height="12" width="10.5" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#babaf0" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
        </div>
        
        <div id="input">
            <input type="text" placeholder="Add a new task" />
            <button id="addInput">Add</button>
        </div>
        <div class="barDiv" >
            <div class="bar"></div><slot name ="bar"/>
            <p>33% Complete</p>    <slot name ="bar"/>
        </div>      
        <div class="todoDiv">
            <div class="eachToDo">
                <label class="container">
                    <input type="checkbox"  name="done" id="done" checked="checked">
                    <span class="checkmark"></span>
                </label>
                <p>Meditation</p>
                <div class="cancel">x</div>
            </div>
            
            <div class="eachToDo"><slot name ="todos"/>
                <label class="container">
                    <input type="checkbox"  name="done" id="done">
                    <span class="checkmark"></span>
                </label>
                <p>Pick up Anna</p>
                <div class="cancel">x</div>
            </div>
            <div class="eachToDo"><slot name ="todos"/>
                <label class="container">
                    <input type="checkbox"  name="done" id="done">
                    <span class="checkmark"></span>
                </label>
                <p>Set up meeting with Jay</p>
                <div class="cancel">x</div>
            </div>
            <div class="eachToDo"><slot name ="todos"/>
                <label class="container">
                    <input type="checkbox"  name="done" id="done">
                    <span class="checkmark"></span>
                </label>
                <p>Finish Daily Ui</p>
                <div class="cancel">x</div>
            </div>
            <div class="eachToDo"><slot name ="todos"/>
                <label class="container">
                    <input type="checkbox"  name="done" id="done">
                    <span class="checkmark"></span>
                </label>
                <p>Second edits on article</p>
                <div class="cancel">x</div>
            </div>
            <div class="eachToDo"><slot name ="todos"/>
                <label class="container">
                    <input type="checkbox"  name="done" id="done" checked="checked">
                    <span class="checkmark"></span>
                </label>
                <p>Email Chris</p>
                <div class="cancel">x</div>
            </div>
        </div>         
    </div>

    
`
sentence.innerHTML=`
    <style>
        #freq-head{
            border-top: 0.1px solid #e7e7ee;
            padding-top: 15px;
            font-size: 20px;
            color: #666565;
        }
    </style>
    <div>
        <p id="freq-head"></p>
    </div>
`
frequency.innerHTML=`
    <style>        
    #freq-p{
        color: #666565;
        //background: blue;
        display: grid;
        grid-template-columns: 0.5fr 0.5fr;
        grid-template-rows: 0.5fr 0.5fr;
        gap: 15px;
        font-size: 20px;
        list-style: none; 
    }
        ::slotted(li){
           background: red;
           border-radius: 25px;
           width: 210px;
           text-align: center;
           padding: 10px !important;
        }
        
        ::slotted(ul)
    </style>
    <div class="frequency">
        <p id="freq-p"><slot name ="freq"/></p>
    </div>
`