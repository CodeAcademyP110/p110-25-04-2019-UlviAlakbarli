"use strict";
let logo=document.querySelector(".logo");
let icon=document.querySelector(".icon-1");
let inname=document.querySelector(".name");
let insurname=document.querySelector(".surname");
let inage=document.querySelector(".age");
let inemail=document.querySelector(".email");
let inwages=document.querySelector(".wages");
let inposition=document.querySelector(".position");
let select=document.querySelector(".select");
let submit1=document.querySelector(".submit-1");
let submit2=document.querySelector(".submit-2");
let form2=document.querySelector(".form-2");
let tbody=document.querySelector("tbody");
let table=document.querySelector(".table");
let no=1;

let rotatecounty=0;
let rotatecount=0;
window.setInterval( function(){
    
        if(rotatecount===0){
            icon.style.transform="rotate(360deg)";
            rotatecount++
        }
        else{
            rotatecount--;
            icon.style.transform="rotate(-360deg)";
            
        }},2000
)
logo.onclick=function(){
    
    if(rotatecounty===0){
        logo.style.transform="rotateY(360deg)";
        rotatecounty++
    }
    else{
        rotatecounty--;
        logo.style.transform="rotateY(-360deg)";
        
    }

    
}


class Company
{
    constructor(){
        this.allposition=[];
        this.allemployees=[];
    }
    addPositonToList(p){
        this.allposition.push(p);
    }
    addEmployeetolist(e){
        this.allemployees.push(e);
    }
    findPosition(n)
    {
        return this.allposition.find(po=>po.id==n)
    }
    findPositionByName(name)
    {
        return this.allposition.find(item=>item.position==name);
    }
}
class Position
{
    constructor(position,wages){
           this.id=no;
           this.position=position;
           this.wages=wages;
           no++;
          
    }
    
}

class Employee// extends Position
{

    constructor(name,surname,age,email,position){
            this.name=name;
            this.surname=surname;
            this.age=age;
            this.email=email;
            this.position=position;
     }

}

//Creata Company
let newCompany=new Company;

submit1.onclick=function(ev){
    ev.preventDefault()
      if(inposition.value.trim().length>0&&inwages.value.trim().length>0){

        let newposition= new Position(inposition.value.trim(),inwages.value.trim());
        newCompany.addPositonToList(newposition)
        let option=document.createElement("option");
        option.innerText=inposition.value.trim();
        option.value=no-1;
        select.appendChild(option);
        inposition.value="";
        inwages.value="";
        form2.classList.remove("d-none");

      }
      

      

      
}
function positionFiender(){
    let b=newCompany.findPosition(select.value).position;
    return b;


}
function positionNameFinder(x){
    let pn=newCompany.findPositionByName(x).wages;
    return pn;

}
submit2.onclick=function(ev){
    ev.preventDefault()

    if(inname.value.trim().length>0&&insurname.value.trim().length>0&&inage.value.trim().length>0&&inemail.value.trim().length>0&&select.value.length>0){
           
        positionFiender();
        tbody.innerHTML="";
        let newemployee= new Employee(inname.value.trim(),insurname.value.trim(),inage.value,inemail.value.trim(),positionFiender());
        newCompany.addEmployeetolist(newemployee);
        
        newCompany.allemployees.forEach(
            
            function(item){
                let tr=document.createElement("tr");
                let key;
                for(key in item){

                    let td=document.createElement("td");
                    

                    td.innerText=item[key];
                    tr.appendChild(td);

                }
                let tdsalary=document.createElement("td");
                let nm=item.position;
                tdsalary.innerText=positionNameFinder(nm);
                tr.appendChild(tdsalary);
                
                
                tbody.appendChild(tr);
                inname.value="";
                insurname.value="";
                inage.value="";
                inemail.value="";
                select.value="a";

        
                table.classList.remove("d-none");

            }
        )
           

    }
    
   
      
}