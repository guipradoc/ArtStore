import styled from 'styled-components'

export const NumberSlide = styled.div`
  background: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  color: #fff;
  font-weight: 500;
  height: 300px;
  max-height: 100vh;
`

export const NumberSlide1 = styled(NumberSlide)`
  background: linear-gradient(
    128deg,
    rgba(64, 175, 255, 1) 0%,
    rgba(63, 97, 255, 1) 100%
  );
`

export const NumberSlide2 = styled(NumberSlide)`
  background: linear-gradient(
    128deg,
    rgba(255, 154, 63, 1) 0%,
    rgba(255, 75, 64, 1) 100%
  );
`

export const NumberSlide3 = styled(NumberSlide)`
  background: linear-gradient(
    128deg,
    rgba(182, 255, 64, 1) 0%,
    rgba(63, 255, 71, 1) 100%
  );

  background: linear-gradient(
    128deg,
    rgba(189, 255, 83, 1) 0%,
    rgba(43, 250, 82, 1) 100%
  );
`

export const NumberSlide4 = styled(NumberSlide)`
  background: linear-gradient(
    128deg,
    rgba(64, 255, 242, 1) 0%,
    rgba(63, 188, 255, 1) 100%
  );
`

export const NumberSlide5 = styled(NumberSlide)`
  background: linear-gradient(
    128deg,
    rgba(255, 64, 156, 1) 0%,
    rgba(255, 63, 63, 1) 100%
  );
`

export const NumberSlide6 = styled(NumberSlide)`
  background: linear-gradient(
    128deg,
    rgba(64, 76, 255, 1) 0%,
    rgba(174, 63, 255, 1) 100%
  );
`

export const NavigationWrapper = styled.div`
  position: relative;
`

export const Dots = styled.div`
  display: flex;
  padding: 10px 0;
  justify-content: center;
`

export const Dot = styled.button`
  border: none;
  width: 10px;
  height: 10px;
  background: #c5c5c5;
  border-radius: 50%;
  margin: 0 5px;
  padding: 5px;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &.active {
    background: #000;
  }
`

export const Arrow = styled.svg`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  fill: #fff;
  cursor: pointer;
`

export const ArrowLeft = styled(Arrow)`
  left: 5px;
`

export const ArrowRight = styled(Arrow)`
  left: auto;
  right: 5px;
`

export const ArrowDisabled = styled(Arrow)`
  fill: rgba(255, 255, 255, 0.5);
`
