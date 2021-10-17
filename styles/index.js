import styled from 'styled-components';
import {breakpoints} from './breakpoints';
import {cardEntrance} from './keyframes';

export const Container = styled.div`
    padding: 100px;
  ${breakpoints ('padding', 'px', [
    {1200: 80},
    {800: 60},
    {600: 40},
    {450: 20},
  ])};
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #353535;
    font-size: 3rem;
    color: #fff;
    box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem, rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
    height: 100%;
    width: 100%;
    border-radius: 4px;
    transition: all 500ms;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${props => props.url});

    @media screen and (min-width: 600px) {
      ${props => props.url && `
      grid-row: span 2 / auto;
      grid-column: span 2 / auto;
      `}
      
    }
    
    &:hover {
        box-shadow: rgba(2, 8, 20, 0.1) 0px 0.35em 1.175em, rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em;
        transform: translateY(-3px) scale(1.1);
  }
`;

export const CardTall = styled.div`

  grid-row: span 2 / auto;
`;

export const CardWide = styled.div`
  grid-row: span 2 / auto;
`;

export const BasicGrid = styled.section`
padding-bottom: 2rem;
    display: grid;
    gap: 1rem;

    /* 1 too skinny, too much code */
    /* grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; */
  
    /* 2 cleaner code */
    /* grid-template-columns: repeat(12, 1fr); */
  
    /* 3  better sizing, but overflows horizontally*/
    /* grid-template-columns: repeat(12, minmax(240px, 1fr)); */
  
    /* 4 final */
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
`;

export const PhotoGrid = styled.section`

padding-bottom: 2rem;

    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    grid-auto-rows: 240px;
`;

export const AnimatedGrid = styled.section`
    height: 85vh;

    display: grid;
    gap: 1rem;

    /**explicit grid */

    grid-template-areas: 
    'a b c d'
    'l x x e'
    'k x x f'
    'j i h g';

    grid-template-rows: repeat(4, 25%); 
    grid-template-rows: 240px auto auto 240px;

    --stagger-delay: 100ms;
`;

export const AnimatedCard = styled.div`
  background-color: rgb(36, 243, 147);
  animation: ${cardEntrance} 700ms ease-out;
  animation-fill-mode: backwards;

  &:nth-child(1) {
    grid-area: a;
    animation-delay: calc(1 * var(--stagger-delay));
  }
  &:nth-child(2) {
  grid-area: b;
  animation-delay: calc(2 * var(--stagger-delay));
}
&:nth-child(3) {
  grid-area: c;
  animation-delay: calc(3 * var(--stagger-delay));
}
&:nth-child(4) {
  grid-area: d;
  animation-delay: calc(4 * var(--stagger-delay));
}
&:nth-child(5) {
  grid-area: e;
  animation-delay: calc(5 * var(--stagger-delay));
}
&:nth-child(6) {
  grid-area: f;
  animation-delay: calc(6 * var(--stagger-delay));
}
&:nth-child(7) {
  grid-area: g;
  animation-delay: calc(7 * var(--stagger-delay));
}
&:nth-child(8) {
  grid-area: h;
  animation-delay: calc(8 * var(--stagger-delay));
}
&:nth-child(9) {
  grid-area: i;
  animation-delay: calc(9 * var(--stagger-delay));
}
&:nth-child(10) {
  grid-area: j;
  animation-delay: calc(10 * var(--stagger-delay));
}
&:nth-child(11) {
  grid-area: k;
  animation-delay: calc(11 * var(--stagger-delay));
}
&:nth-child(12) {
  grid-area: l;
  animation-delay: calc(12 * var(--stagger-delay));
}
&:last-child {
  grid-area: x;
  animation-delay: calc(13 * var(--stagger-delay));
}

`;
