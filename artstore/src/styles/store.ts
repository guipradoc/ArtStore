import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CoffeeTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 1080px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem;
  }

  width: 70rem;
  margin-bottom: 3.375rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;

    color: ${(props) => props.theme.Base['base-subtitle']};
  }
`
export const CoffeeContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  max-width: 70rem;

  @media (max-width: 1080px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem;
  }
`
