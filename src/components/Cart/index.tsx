import { useEffect, useState } from 'react'
import { Container, CartTitle, List, TotalContainer, ButtonContainer } from './styles';
import { api } from '../../services/api';

interface Item{
  id: number,
  imageUrl: string,
  name: string,
  price: number,
  sellingPrice: number,
  detailUrl: string
}

function formatPrice(price:number) {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  return formatter.format(price * 10 / 1000)
}
 
export function Cart() {

  const [itens, setItens] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    api('itens/lowerThanTen')
    .then( response => {

      setItens(response.data.items);
      setTotal(response.data.value);
    });
  }, [])

  return (
      <Container>
      <CartTitle>Meu carrinho</CartTitle>
      <List>
        {itens.map( (item:Item) => {
          return (
            <li key={item.id}>
              <img src={item.imageUrl} alt={item.detailUrl}/>
              <div>
                <h4>{item.name.toLowerCase()}</h4>
                <span>{formatPrice(item.price)}</span>
                <strong>{formatPrice(item.sellingPrice)}</strong>
              </div>
            </li>
          )
        })} 
      </List>
      <TotalContainer>
        <div>
          <strong>Total</strong>
          <strong>{formatPrice(total)}</strong>
        </div>
        {
          total > 1000 && <p>Parabéns, sua compra tem frete grátis !</p>  
        }
      </TotalContainer>
      <ButtonContainer>
        <button>
          Finalizar compra
        </button>
      </ButtonContainer>
    </Container>
  )
}