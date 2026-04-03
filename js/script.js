function addPolicy(){

let title=document.getElementById("policyTitle").value
let desc=document.getElementById("policyDesc").value

let policies=JSON.parse(localStorage.getItem("policies")||"[]")

policies.push({title,desc})

localStorage.setItem("policies",JSON.stringify(policies))

loadPolicies()

}

function loadPolicies(){

let list=document.getElementById("policyList")
if(!list) return

let policies=JSON.parse(localStorage.getItem("policies")||"[]")

list.innerHTML=""

policies.forEach(p=>{

let li=document.createElement("li")
li.innerHTML="<b>"+p.title+"</b> - "+p.desc

list.appendChild(li)

})

document.getElementById("policyCount")?.innerText=policies.length

}

loadPolicies()

function addReport(){

let title=document.getElementById("reportTitle").value
let desc=document.getElementById("reportDesc").value

let reports=JSON.parse(localStorage.getItem("reports")||"[]")

reports.push({title,desc})

localStorage.setItem("reports",JSON.stringify(reports))

loadReports()

}

function loadReports(){

let list=document.getElementById("reportList")
if(!list) return

let reports=JSON.parse(localStorage.getItem("reports")||"[]")

list.innerHTML=""

reports.forEach(r=>{

let li=document.createElement("li")
li.innerHTML="<b>"+r.title+"</b> - "+r.desc

list.appendChild(li)

})

document.getElementById("reportCount")?.innerText=reports.length

}

loadReports()