import { CalendarWeek, CalendarWrapper, Item, ItemDetail } from './styled'

const Calendar = () => {
  return (
    <CalendarWrapper>
      <CalendarWeek>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>

        <Item>
          <ItemDetail>
            <p>Hacer ejercicio</p>
            <p>
              <time dateTime="17:00">5</time>-<time dateTime="18:00">6 pm</time>
            </p>
          </ItemDetail>
        </Item>
        <Item>
          <ItemDetail>
            <p>Hacer ejercicio</p>
            <p>
              <time dateTime="17:00">5</time>-<time dateTime="18:00">6 pm</time>
            </p>
          </ItemDetail>
        </Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
      </CalendarWeek>
    </CalendarWrapper>
  )
}

export default Calendar
