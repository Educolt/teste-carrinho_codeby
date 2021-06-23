import styled from 'styled-components';

export const Container = styled.div`
  background: #ffffff;
  width: fit-content;
  height: fit-content;
  border-radius: 8px;
  margin: 20px;
  
  display: flex;
  flex-direction: column;
`;
export const CartTitle = styled.h1`
  font-size: 16px;
  color: var(--text-color);
  text-align: center;
  width: 100%;
  height: fit-content;
  padding: 10px;
`;
export const List = styled.ul`

  list-style: none;

  padding: 10px;
  border-top: 0.5px solid var(--border-color);
  border-bottom: 0.5px solid var(--border-color);

  li {
    display: flex;
    width: 350px;
    height: fit-content;
    margin: 10px;
  }

  li img {
    width: 80px;
    height: 80px;
    border: 1px solid var(--border-color);
    margin-right: 20px;
    padding: 10px;
  }

  li div {
    display: flex;
    flex-direction: column;
  }

  li div h4 {
    font-size: 12px;
    margin-top: 10px;
    width: fit-content;
  }

  li div strong, li div h4 {
    color: var(--text-color);
  }
  
  li div span {
    color: var(--border-color);
    font-size: 8px;
  }

  li div strong {
    font-size: 10px;
    font-weight: 600;
  }

`;
export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  padding: 10px;
  border-bottom: 1px solid var(--border-color);

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 15px;
    padding: 5px;
  }

  p {
    padding: 8px;
    border-radius: 15px;
    background-color: var(--free-tax-background);
    color: var(--free-tax-text-color);
    font-size: 12px;
    width: fit-content;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;

  button {
    color: #ffffff;
    width: 100%;
    height: 100%;
    font-weight: bold;

    padding: 15px;
    background: var(--blue);
    border: none;
    border-radius: 8px;
  }
`;