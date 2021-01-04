function calcular() {
    let aa = document.getElementById('a')
    let bb = document.getElementById('b')
    let cc = document.getElementById('c')
    let res = document.getElementById('res')
    let a = Number(aa.value)
    let b = Number(bb.value)
    let c = Number(cc.value)
    let delta =  b*b -4 * a * c
   
    res.innerHTML = ''
    res.innerHTML += `<p>A: ${a} B: ${b} C: ${c}</p>`
    let d = document.querySelector('body#body')
    d.style.background = 'rgba(59, 59, 243, 0.932)'  
        
    if ( delta < 0 ){
        res.innerHTML +=`<p>O resultado de Δ foi ${delta}, então a equação não possui resultados reais. </p>`
        d.style.background = 'red'
    } else if( delta == 0){
        res.innerHTML +='<p>O resultado de Δ foi = 0, então a equação possui apenas um resultado real. </p>'
        let x1 = (- b + Math.sqrt(delta)) /2*a
        res.innerHTML += `<p>X: ${x1.toFixed(2)}</p>`
        
    } else {
        //alert('ok')
        let x1 = (- b + Math.sqrt(delta)) /2*a
        let x2 = (- b - Math.sqrt(delta))/2*a

        res.innerHTML += `<p>As duas raízes da equação do segundo grau são:</p> <p>X1: ${x1.toFixed(2)} e X2: ${x2.toFixed(2)}</p>`
        
    }


    
}




