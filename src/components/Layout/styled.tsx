import styled from 'styled-components'

export const Page = styled.div`
  display: grid;
  grid-template-columns: 16.25rem 1fr;
  grid-template-rows: 6rem 1fr;
  block-size: 100vh;
  grid-template-areas:
    'header header'
    'sidebar calendar';
`

export const Header = styled.div`
  grid-area: header;
  border: 5px solid lightcoral;
`

export const Sidebar = styled.div`
  grid-area: sidebar;
  border: 5px solid lightgreen;
`

export const Calendar = styled.div`
  grid-area: calendar;
  border: 5px solid lightsalmon;
`
