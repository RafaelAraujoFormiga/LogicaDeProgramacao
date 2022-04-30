//Kata I :calculateSalary()
function calculateSalary(sFixo,vVendas){
        if(vVendas==1200){
           return sFixo + (sFixo*3/100)
        }
        else if(vVendas>1200){ return sFixo+(sFixo*3/100)+(sFixo*5/100)}
        else{ return sFixo}
}
calculateSalary()

//Kata II:cashMachine()
function cashMachine(vS,vF){
    let dd=vF-vS
    let arr=['Notas sacadas']
    
    
    if(vS>=200){
    let t=0
    for(let i=vS;i>=200;i-=200){
    vS-= 200
    t +=1
    }
    arr.push(t+' de R$200')
    }
    if(vS>=100){
      let t=0
      for(let i=vS;i>=100;i-=100){
      vS -= 100
      t +=1
      }
      arr.push(t +' de R$100')
      }
    if(vS>=50){
      let t=0
      for(let i=vS;i>=50;i-=50){
      vS -= 50
      t +=1
      }
      arr.push(t +' de R$50')
      }
      if(vS>=20){
        let t=0
        for(let i=vS;i>=20;i-=20){
        vS -= 20
        t +=1
        }
        arr.push(t +' de R$20')
        }
        if(vS>=10){
          let t=0
          for(let i=vS;i>=10;i-=10){
          vS -= 10
          t +=1
          }
          arr.push(t +' de R$10')
          }
          if(vS>=5){
            let t=0
            for(let i=vS;i>=5;i-=5){
            vS -= 5
            t +=1
            }
            arr.push(t +' de R$5')
            }
            if(vS>=2){
              let t=0
              for(let i=vS;i>=2;i-=2){
              vS -= 2
              t +=1
              }
              arr.push(t +' de R$2')
              }
                arr.push(' Saldo Atual: '+dd)
    return arr.join(", ")
    }
    console.log(cashMachine())
//Kata III:calculateStock()

function calculateStock(qAtualS,qMaximaS,qMinimaS){

    if(qAtualS >= qMaximaS+qMinimaS/2){
        return 'Não efetuar compra'
    }
    return 'Efetuar compra'

}
calculateStock()


//Kata IV:calculateAge()

function calculateAge(anoNascimento,anoAtual){
 let idadeAtual=` Idade em anos, ${anoAtual-anoNascimento};
 idade em meses, ${anoAtual-anoNascimento * 12};
 idade em dias, ${anoAtual-anoNascimento * 365};
 idade em semanas,${anoAtual-anoNascimento * 52}.`
 return idadeAtual
}
console.log(calculateAge())

//Kata V:getDiagonal()
let arrMatrizQuadrada=[ [1, 2, 3] ,
                        [4, 5, 6] , 
                        [7, 8, 9] ]
function getDiagonal(a){
      let diagonalPrincipal=[]
     
      for(let i=0;i<a.length;i++){
          for(let j=0;j<a.length;j++){
       if(i==j){
           diagonalPrincipal.push(a[i][j])
       }
      }}
      return diagonalPrincipal.join(", ")
}
console.log(getDiagonal(arrMatrizQuadrada))