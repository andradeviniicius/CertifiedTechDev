function aquecerPipoca(tempo, comida) {
  
  let pipoca = 10
  let macarrao = 8
  let carne = 15
  let feijao = 12
  let brigadeiro = 8

  switch (comida) {
    case 'macarrao':
      if (tempo < macarrao) {
        console.log(`Tempo insuficiente para ${comida}, recomendamos entre ${macarrao} e ${macarrao*2}`)        
      } else if (tempo >= macarrao*2 && tempo < macarrao*3) {
        console.log(`${comida} queimou :(`)
      } else if (tempo >= macarrao*3)
      console.log(`Kabumm!`)
      else {
        console.log(`${comida} pronto, bom apetite!!!`)
      }
      break;
    case 'pipoca':
      if (tempo < pipoca) {
        console.log(`Tempo insuficiente para ${comida}, recomendamos entre ${pipoca} e ${pipoca*2}`)        
      } else if (tempo >= pipoca*2 && tempo < pipoca*3) {
        console.log(`${comida} queimou :(`)
      } else if (tempo >= pipoca*3)
      console.log(`Kabumm!`)
      else {
        console.log(`${comida} pronto, bom apetite!!!`)
      }
      break;
    case 'macarrao':
      if (tempo < carne) {
        console.log(`Tempo insuficiente para ${comida}, recomendamos entre ${carne} e ${carne*2}`)        
      } else if (tempo >= carne*2 && tempo < carne*3) {
        console.log(`${comida} queimou :(`)
      } else if (tempo >= carne*3)
      console.log(`Kabumm!`)
      else {
        console.log(`${comida} pronto, bom apetite!!!`)
      }
      break;
    case 'macarrao':
      if (tempo < feijao) {
        console.log(`Tempo insuficiente para ${comida}, recomendamos entre ${feijao} e ${feijao*2}`)        
      } else if (tempo >= feijao*2 && tempo < feijao*3) {
        console.log(`${comida} queimou :(`)
      } else if (tempo >= feijao*3)
      console.log(`Kabumm!`)
      else {
        console.log(`${comida} pronto, bom apetite!!!`)
      }
      break;
    case 'macarrao':
      if (tempo < brigadeiro) {
        console.log(`Tempo insuficiente para ${comida}, recomendamos entre ${brigadeiro} e ${brigadeiro*2}`)        
      } else if (tempo >= brigadeiro*2 && tempo < brigadeiro*3) {
        console.log(`${comida} queimou :(`)
      } else if (tempo >= brigadeiro*3)
      console.log(`Kabumm!`)
      else {
        console.log(`${comida} pronto, bom apetite!!!`)
      }
      break;
    
      default:
        console.log('--------------------')
        console.log('Argumento Invalido, favor apenas utilizar letras minusculas e evitar caracteres especiais')
        console.log('--------------------')
    break;
  }
}
aquecerPipoca(24, 'macarrao')