import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent  implements OnInit{
  ngOnInit(): void {
    console.log("loaded");
    let savedAppointment = localStorage.getItem("appointments")
    this.val = savedAppointment ? JSON.parse(savedAppointment) : []
  }

  //One way data binding

  appointment: Appointment = {
    id: 1,
    title: "appointment 1",
    date: new Date('2025-07-30')
  }


  //Two way data binding
  newAppointmentDate: Date = new Date();
  newAppointmentTitle: string = ""

  val:Appointment[] = []
  addAppointment(){
    // alert("data added::"+this.newAppointmentDate + " "+ this.newAppointmentTitle)
    if(this.newAppointmentTitle.trim() && this.newAppointmentDate){
      let newAppointment: Appointment = {
        id: Date.now(),
        title:this.newAppointmentTitle,
        date: this.newAppointmentDate
      }
      this.val.push(newAppointment);
      localStorage.setItem("appointments",JSON.stringify(this.val))
    }
    // alert(this.val.length)
  }
  deleteAppointment(index: number){
    this.val.splice(index,1);
    localStorage.setItem("appointments",JSON.stringify(this.val))

  }
}
