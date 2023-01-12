import React from "react";
import Calendar from "react-calendar";
import Chip, { ChipProps } from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import './ReactCalendar.css';

const scheduledEvents = [
	{
		"eventId": "PROMOTION_LAUNCH",
		"startDate": "2023-01-30",
		"eventProperties": {
			"description": "The start date of active trip promotion",
			"eventType": "DEADLINE",
			"eventCategory": "MILESTONE",
			"eventName": "Promotion launch",
			"displayDescription": "Receive materials from EF"
		}
	},
	{
		"eventId": "MEETING_PROMOTION_WINDOW",
		"startDate": "2023-01-30",
		"endDate": "2023-02-08",
		"eventProperties": {
			"description": "The window of time for active trip promotion, between the promotion launch and the recruitment meeting",
			"eventType": "DEFAULT",
			"eventCategory": "RECRUITMENT_WINDOW",
			"eventName": "Meeting promotion window",
			"displayDescription": "And keep promoting"
		}
	},
	{
		"eventId": "TRIP_MEETING_INVITE_EMAIL_1",
		"startDate": "2023-01-30",
		"eventProperties": {
			"description": "This communication announces that a trip is happening and that families must RSVP to learn more.",
			"eventType": "EMAIL",
			"eventCategory": "PARENT_AND_FAMILY_AWARENESS",
			"eventName": "Pre-meeting email 1 of 3",
			"displayDescription": "Send email #1 to families"
		}
	},
	{
		"eventId": "PROMOTION_MATERIAL_DEADLINE_POSTERS_HUNG",
		"startDate": "2023-02-01",
		"eventProperties": {
			"description": "The recommended day when trip promotion posters should be hung up around the school",
			"eventType": "DEADLINE",
			"eventCategory": "STUDENT_AWARENESS",
			"eventName": "Promotion posters deadline",
			"displayDescription": "Hang up EF posters"
		}
	},
	{
		"eventId": "PROMOTION_MATERIAL_DEADLINE_FLYERS_DISTRIBUTED",
		"startDate": "2023-02-01",
		"eventProperties": {
			"description": "The recommended day when trip promotion flyers distributed to students",
			"eventType": "DEADLINE",
			"eventCategory": "STUDENT_AWARENESS",
			"eventName": "Promotion flyers deadline",
			"displayDescription": "Hand out invites"
		}
	},
	{
		"eventId": "PROMOTION_MATERIAL_DEADLINE_STUDENT_EXCITEDMENT_PPTX_PRESENTED",
		"startDate": "2023-02-01",
		"eventProperties": {
			"description": "The recommended day by which time the student excitement PowerPoint has been presented to students",
			"eventType": "DEADLINE",
			"eventCategory": "STUDENT_AWARENESS",
			"eventName": "Student excitement powerpoint",
			"displayDescription": "Show student excitement PPT in classes"
		}
	},
	{
		"eventId": "MEETING_RSVP_CHECKIN_CALL_1",
		"startDate": "2023-02-01",
		"eventProperties": {
			"eventType": "MEETING",
			"eventCategory": "EF_CONTACT",
			"description": "Call to touch base about how trip promotion is going, how many RSVPs have been submitted",
			"eventName": "RSVP check-in call 1 of 2",
			"displayDescription": "Check in on RSVPs"
		}
	},
	{
		"eventId": "TRIP_MEETING_INVITE_EMAIL_2",
		"startDate": "2023-02-02",
		"eventProperties": {
			"description": "This communication reminds families that the trip is happening and that they must RSVP to a meeting in order to get additional information.",
			"eventType": "EMAIL",
			"eventCategory": "PARENT_AND_FAMILY_AWARENESS",
			"eventName": "Pre-meeting email 2 of 3",
			"displayDescription": "Send email #2 to families"
		}
	},
	{
		"eventId": "TRIP_MEETING_INVITE_EMAIL_3",
		"startDate": "2023-02-06",
		"eventProperties": {
			"description": "Final reminder about the upcoming information meeting and reminds families that they have to RSVP via the link provided.",
			"eventType": "EMAIL",
			"eventCategory": "PARENT_AND_FAMILY_AWARENESS",
			"eventName": "Pre-meeting email 3 of 3",
			"displayDescription": "Send email #3 to families"
		}
	},
	{
		"eventId": "MEETING_RSVP_CHECKIN_CALL_2",
		"startDate": "2023-02-06",
		"eventProperties": {
			"eventType": "MEETING",
			"eventCategory": "EF_CONTACT",
			"description": "Call to touch base about how trip promotion is going, how many RSVPs have been submitted",
			"eventName": "RSVP check-in call 2 of 2",
			"displayDescription": "Check in on RSVPs"
		}
	},
	{
		"eventId": "MEETING_REMINDER_1",
		"startDate": "2023-02-07",
		"eventProperties": {
			"description": "Reminds RSVP'ed families about the upcoming meeting",
			"eventType": "EMAIL",
			"eventCategory": "PARENT_AND_FAMILY_AWARENESS",
			"eventName": "Meeting reminder email 1 of 2",
			"displayDescription": "Meeting reminder #1"
		}
	},
	{
		"eventId": "MEETING_PREP_CALL",
		"startDate": "2023-02-07",
		"eventProperties": {
			"description": "Run through the plan for the recruitment meeting presentation",
			"eventType": "MEETING",
			"eventCategory": "EF_CONTACT",
			"eventName": "Meeting preparation call",
			"displayDescription": "Meeting presentation walkthrough"
		}
	},
	{
		"eventId": "RECRUITMENT_MEETING",
		"startDate": "2023-02-08",
		"eventProperties": {
			"description": "Recruitment meeting",
			"eventType": "RSVP_MEETING",
			"eventCategory": "MILESTONE",
			"eventName": "Recruitment meeting",
			"displayDescription": "Recruitment meeting!"
		}
	},
	{
		"eventId": "MEETING_REMINDER_2",
		"startDate": "2023-02-08",
		"eventProperties": {
			"eventType": "EMAIL",
			"eventCategory": "PARENT_AND_FAMILY_AWARENESS",
			"description": "",
			"eventName": "Meeting reminder email 2 of 2",
			"displayDescription": "Meeting reminder #2"
		}
	},
	{
		"eventId": "ENROLLMENT_WINDOW",
		"startDate": "2023-02-08",
		"endDate": "2023-02-17",
		"eventProperties": {
			"eventType": "DEFAULT",
			"eventCategory": "RECRUITMENT_WINDOW",
			"description": "Window of time after the meeting when potential travelers are actively encouraged to enroll on the trip",
			"eventName": "Enrollment window",
			"displayDescription": "Encourage enrollment"
		}
	},
	{
		"eventId": "POST_MEETING_CALL",
		"startDate": "2023-02-09",
		"eventProperties": {
			"eventType": "MEETING",
			"eventCategory": "EF_CONTACT",
			"description": "Discuss how the meeting went",
			"eventName": "Post-meeting call",
			"displayDescription": "Meeting followup with EF"
		}
	},
	{
		"eventId": "ENROLLMENT_REMINDER_1",
		"startDate": "2023-02-09",
		"eventProperties": {
			"eventType": "EMAIL",
			"eventCategory": "PARENT_AND_FAMILY_AWARENESS",
			"description": "Email sent to RSVP'ed families encouraging them to enroll on the trip",
			"eventName": "Enrollment reminder email 1 of 2",
			"displayDescription": "Send followup email #1 to families"
		}
	},
	{
		"eventId": "ENROLLMENT_DEADLINE",
		"startDate": "2023-02-17",
		"eventProperties": {
			"eventType": "DEADLINE",
			"eventCategory": "MILESTONE",
			"description": "Arbitrary enrollment deadline, endDateRuleset of enrollment window, or \"active\" recruitment efforts",
			"eventName": "Enrollment deadline",
			"displayDescription": "Enrollment deadline"
		}
	},
	{
		"eventId": "ENROLLMENT_REMINDER_2",
		"startDate": "2023-02-17",
		"eventProperties": {
			"eventType": "EMAIL",
			"eventCategory": "PARENT_AND_FAMILY_AWARENESS",
			"description": "Email sent to RSVP'ed families encouraging them to enroll on the trip",
			"eventName": "Enrollment reminder email 2 of 2",
			"displayDescription": "Send followup email #2 to families"
		}
	}
];

enum EventType {
	Email = 'EMAIL',
	Meeting = 'MEETING',
	RsvpMeeting = 'RSVP_MEETING',
	Deadline = 'DEADLINE',
	Default = 'DEFAULT',
}

const eventTypeColorMap = new Map<EventType, ChipProps["color"]>([
	[EventType.Default, 'warning'],
	[EventType.Deadline, 'error'],
	[EventType.Email, 'success'],
	[EventType.Meeting, 'purple'],
	[EventType.RsvpMeeting, 'info']
]);

const ReactCalendar = () => {
	return (
		<Stack spacing={2}>
			<span> React Calendar</span>
			<Calendar
				formatDay={DayLabel}
				tileContent={CalendarDay}
				defaultActiveStartDate={new Date(scheduledEvents[0].startDate)}
				showNavigation={true}
				locale='en-US'
				next2Label={null} // Setting the value of navigation options explicitly to null will hide that option
				next2AriaLabel={null}
				prev2Label={null}
				prev2AriaLabel={null}
				minDetail='month'
			/>
		</Stack>
	);
};

const DayLabel = (locale, date) => {
	return (
		<Stack flexGrow={1} flexDirection='row' justifyContent='space-between' sx={{ p: 0, borderBottom: '1px solid black', borderColor: 'divider' }}>
			<Box sx={{ py: 2, pl: 1 }}>{date.toLocaleDateString(locale, { weekday: 'long' })}</Box>
			<Box sx={{ py: 2, pr: 1 }}>{date.getDate()}</Box>
		</Stack>
	);
}

const CalendarDay = ({ date, view }) => {

	if (view !== 'month') {
		return;
	}

	const eventsOnThisDay = scheduledEvents.filter(e => {
		const calendarDT = new Date(date);
		const eventDT = new Date(e.startDate);
		const calendarDate = new Date(calendarDT.getUTCFullYear(), calendarDT.getUTCMonth(), calendarDT.getUTCDate()).getTime();
		const eventDate = new Date(eventDT.getUTCFullYear(), eventDT.getUTCMonth(), eventDT.getUTCDate()).getTime();
		console.log(`eventDate: ${eventDate}, calendarDate: ${calendarDate}, date: ${JSON.stringify(date)}`);
		return calendarDate === eventDate;
	});

	return (
		<Stack spacing={2} sx={{ mt: 1, mb: 1, alignSelf: 'stretch', minHeight: 60 }}>
			{eventsOnThisDay.map((event) => {
				const eventDotColor = eventTypeColorMap.get(event.eventProperties.eventType as EventType) || eventTypeColorMap.get(EventType.Default);
				return <Chip sx={{ alignSelf: 'stretch' }} label={event.eventProperties.displayDescription} variant="filled" color={eventDotColor} />
			})}
		</Stack>
	)
}
export default ReactCalendar;
