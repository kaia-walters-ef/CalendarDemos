import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "../../../node_modules/react-big-calendar/lib/sass/styles.scss";
import "../../../node_modules/react-big-calendar/lib/addons/dragAndDrop/styles.scss";

const localizer = momentLocalizer(moment);

//How are events added to the calendar

const ReactBigCalendar = (props) => {
  const myEventsList = [];
  return (
    <div>
      <span>React Big Calendar</span>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default ReactBigCalendar;
