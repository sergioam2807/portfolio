import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2";
import { calendarApi } from "../api";
import { convertEventsToDateEvents } from "../helpers";
import { onAddNewEvent, onDeleteEvent, onLoadEvent, onSetActiveEvent, onUpdateEvent } from "../store";

export const useCalendarStore = () => {

    const dispatch = useDispatch();
    const { events, activeEvent }= useSelector(state => state.calendar);
    const { user }= useSelector(state => state.auth)

    const setActiveEvent = ( calendarEvent ) =>{
        dispatch( onSetActiveEvent(calendarEvent) ) 
    }

    const startSavingEvent = async( calendarEvent ) =>{
        //TODO: CONECTAR CON BACKEND
        try {

            if( calendarEvent.id){
                //Actualizacion
                await calendarApi.put(`/events/${calendarEvent.id}`, calendarEvent )
                dispatch( onUpdateEvent( {...calendarEvent, user } ) );
                return;
    
            } 
            //creando
            const { data } = await calendarApi.post('/events', calendarEvent);
            dispatch( onAddNewEvent({ ...calendarEvent, id: data.evento.id, user }));
            
        } catch (error) {
            console.log(error);
            Swal.fire('Error in the save action', error.response.data.msg, 'error' );
        }

        
 
    }

    const startDeletingEvent = async( ) =>{

        try {

            await calendarApi.delete(`/events/${ activeEvent.id }`)
            dispatch( onDeleteEvent() );

        } catch (error) {
            console.log(error)
            Swal.fire('Error in the delete action', error.response.data.msg, 'error' );
            
        }

        
    }

    const startLoadingEvents = async() =>{
        try {
            
            const { data }= await calendarApi.get('/events');
            const events = convertEventsToDateEvents( data.events );
            dispatch(onLoadEvent( events ));
            console.log(events)

        } catch (error) {
            console.log('Error changing events')
            console.log(erro)
        }
    }

    return {
        //properties
        events,
        activeEvent,
        hasEventSelected: !!activeEvent,

        //methods
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent,
        startLoadingEvents
    }
}
