import {
  CalendarDay,
  CalendarWeek,
  CalendarWrapper,
  CurrentTime,
  HourCell,
  Item,
  ItemDetail,
  TimezoneCell,
} from './styled'

const Calendar = () => {
  return (
    <CalendarWrapper>
      <CalendarWeek>
        <CurrentTime />
        <TimezoneCell>GMT -5</TimezoneCell>
        <CalendarDay>
          <a href="#dia">
            <time dateTime="06-06-2021">
              <span>DOM</span>
              <br />
              <span>6</span>
            </time>
          </a>
        </CalendarDay>
        <CalendarDay isActive>
          <a href="#dia">
            <time dateTime="07-06-2021">
              <span>LUN</span>
              <br />
              <span>7</span>
            </time>
          </a>
        </CalendarDay>
        <CalendarDay>
          <a href="#dia">
            <time dateTime="08-06-2021">
              <span>MAR</span>
              <br />
              <span>8</span>
            </time>
          </a>
        </CalendarDay>
        <CalendarDay>
          <a href="#dia">
            <time dateTime="09-06-2021">
              <span>MIE</span>
              <br />
              <span>9</span>
            </time>
          </a>
        </CalendarDay>
        <CalendarDay>
          <a href="#dia">
            <time dateTime="10-06-2021">
              <span>JUE</span>
              <br />
              <span>10</span>
            </time>
          </a>
        </CalendarDay>
        <CalendarDay>
          <a href="#dia">
            <time dateTime="11-06-2021">
              <span>VIE</span>
              <br />
              <span>11</span>
            </time>
          </a>
        </CalendarDay>
        <CalendarDay>
          <a href="#dia">
            <time dateTime="12-06-2021">
              <span>SAB</span>
              <br />
              <span>12</span>
            </time>
          </a>
        </CalendarDay>
        <HourCell></HourCell>
        <Item>
          <ItemDetail tabIndex={0}>
            <p>Hacer ejercicio</p>
            <p>
              <time dateTime="17:00">5</time>-<time dateTime="18:00">6 pm</time>
            </p>
          </ItemDetail>
        </Item>
        <Item>
          <ItemDetail tabIndex={0}>
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
        <HourCell>1 AM</HourCell>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <HourCell>2 AM</HourCell>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <HourCell>3 AM</HourCell>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <HourCell>4 AM</HourCell>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <HourCell>5 AM</HourCell>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <HourCell>6 AM</HourCell>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <HourCell>7 AM</HourCell>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <HourCell>8 AM</HourCell>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <HourCell>9 AM</HourCell>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <HourCell>10 AM</HourCell>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <HourCell>11 AM</HourCell>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <HourCell>12 PM</HourCell>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <HourCell>1 PM</HourCell>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <HourCell>2 PM</HourCell>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <HourCell>3 PM</HourCell>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <HourCell>4 PM</HourCell>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <HourCell>5 PM</HourCell>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <HourCell>6 PM</HourCell>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <HourCell>7 PM</HourCell>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <HourCell>8 PM</HourCell>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <HourCell>9 PM</HourCell>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <HourCell>10 PM</HourCell>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <HourCell>11 PM</HourCell>
      </CalendarWeek>
    </CalendarWrapper>
  )
}

export default Calendar
