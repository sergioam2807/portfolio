
export const CalendarEvent = ({ event }) => {

    const { title, user, start, end }= event; 

  return (
    <>
        <span>{ `${start.getHours()}:${start.getMinutes()} - ${end.getHours()}:${end.getMinutes()} `}</span>
        <strong>{title}</strong>
        <span>- { user.name }</span>
    </>
  )
}
