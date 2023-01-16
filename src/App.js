import { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'

import './App.css'

function App() {
	const [state, setState] = useState([])
	const handleEventClick = (clickInfo) => {
		if (
			alert(
			)
		) {
			clickInfo.event.remove()
		}
	}
	function handleDateSelect(selectInfo) {
		let color = prompt('Color please')
		let title = prompt('Please enter a new title for your event')
		let calendarApi = selectInfo.view.calendar

		calendarApi.unselect()

		if (color) {
			setState(
				calendarApi.addEvent({
					id: Math.random().toString(),
					title,
					color,
					start: selectInfo.startStr,
					end: selectInfo.endStr,
				}),
			)
		}
	}
	return (
		<FullCalendar
			plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
			headerToolbar={{
				left: 'prevYear,prev,dayGridMonth',
				center: 'title',
				right: 'timeGridDay,next,nextYear',
			}}
			initialView='dayGridMonth'
			eventBackgroundColor={state.color}
			eventBorderColor='black'
			locales='ru'
			firstDay='1'
			height={'100vh'}
			editable={true}
			selectable={true}
			selectMirror={true}
			dayMaxEvents={true}
			weekends={true}
			buttonText={{ day: 'День', month: 'Месяц' }}
			select={(w) => handleDateSelect(w)}
			eventClick={(w) => handleEventClick(w)}
			events={state}
		/>
	)
}

export default App
