var paciente = document.querySelector(".tabela__texto")

for (i in paciente){
    var p1 = window.document.querySelector(".peso1")
    var a1 = window.document.querySelector(".altura1")
    imc1 = p1/a1**2
    res1.innerHTML = imc1
}
