import styled from 'styled-components'
export const CalendarWrapper = styled.div`
  color: var(--gray20);
  padding-inline: 1.5rem;
  --minBlockSize: 4rem;
  --maxBlockSize: auto;
  --minInlineSize: 5rem;
  --maxInlineSize: 1fr;
  position: relative;
`

export const CalendarWeek = styled.div`
  display: grid;
  grid-template-columns: auto repeat(7, minmax(var(--minInlineSize), var(--maxInlineSize)));
  grid-template-rows: 7rem repeat(24, minmax(var(--minBlockSize), var(--maxBlockSize)));
  min-block-size: 700px;
`

export const Item = styled.div`
  counter-increment: item-count;
  border-inline-start: 1px solid currentColor;
  border-block-end: 1px solid currentColor;
  padding: 0.25rem;
  :nth-of-type(3) {
    grid-row: 2;
    grid-column: 2;
  }
`
export const CalendarDay = styled.h2<{ isActive?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0;
  position: sticky;
  inset-block-start: 0;
  background: var(--white);

  a {
    text-decoration: none;
    color: currentColor;
    outline: none;
    :hover,
    :focus {
      span {
        :nth-of-type(2) {
          background-color: var(--gray10);
        }
      }
    }
  }
  span {
    :nth-of-type(1) {
      font: var(--body1-regular);
    }
    :nth-of-type(2) {
      font: var(--subtitle-subtitle1);
      line-height: 2.75rem;
      inline-size: 2.75rem;
      display: inline-block;
      border-radius: 50%;
      ${({ isActive }) =>
        isActive &&
        `
        background: var(--blue30);
        color: var(--white);
      `}
    }
  }
  ::before {
    content: '';
    inline-size: 1px;
    block-size: 2rem;
    background: currentColor;
    position: absolute;
    inset-block-end: 0;
    inset-inline-start: 0;
  }
`

export const ItemDetail = styled.div`
  background: var(--blue10);
  color: var(--white);
  border-radius: 0.25rem;
  padding-inline: 1rem;
  padding-block: 0.625rem;
  overflow: hidden;
  font: var(--body2-medium);
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  p {
    margin: 0;
    white-space: nowrap;
  }
`

export const TimezoneCell = styled.div`
  font: var(--body3-regular);
  position: sticky;
  inset-block-start: 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding-inline-end: 1rem;
  white-space: nowrap;
  transform: translateY(1em);
  background-color: var(--white);

  ::before {
    content: '';
    inline-size: 0.5rem;
    block-size: 1px;
    background-color: var(--gray20);
    position: absolute;
    inset-inline-end: 0;
    inset-block-end: 0;
  }
`

export const HourCell = styled.span`
  place-self: start end;
  font: var(--body3-regular);
  transform: translateY(-50%);
  padding-inline-end: 1rem;
  ::before {
    content: '';
    inline-size: 0.5rem;
    block-size: 1px;
    background: currentColor;
    position: absolute;
    inset-inline-end: 0;
    inset-block-end: 50%;
  }
`

export const CurrentTime = styled.div`
  block-size: 2px;
  background: var(--red10);
  grid-row: 2;
  grid-column: 2;
  transform: translateY(24px);
  top: 0;

  z-index: 2;
  ::before {
    content: '';
    inline-size: 1rem;
    block-size: 1rem;
    background-color: var(--red10);
    border-radius: 50%;
    display: inline-block;
    transform: translateY(-50%);
  }
`
