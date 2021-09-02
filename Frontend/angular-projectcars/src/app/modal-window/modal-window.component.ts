import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  openDialog(): void{
    
  }

  ngOnInit(): void {
  }

}
