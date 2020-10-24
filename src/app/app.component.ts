import { Component, OnInit } from '@angular/core';
import { MainTopBarMenuService } from './services/core/main-top-bar-menu.service';
import { SidebarService } from './services/core/sidebar.service';

declare var App:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private MenuSvc: MainTopBarMenuService, private SidebarSvc: SidebarService){

  }

  title = 'app-real-time';
  miempresa: string = "Grupo Flecha Amarilla";
  periodo: number = 2020;

  menuItems:any[] = [];
  sidebarItems:any[] = [];


  ngOnInit(){
    //Load SideBar Script
    App.init();
    this.getData();
  }

  getData(){
    this.MenuSvc.getItemsMenu().subscribe((data:any)=>{
      //Async
      this.menuItems = data;
    });

    this.SidebarSvc.getItemsSidebar().subscribe((data:any)=>{
      this.sidebarItems = data;
    });
  }

  listenChildMenuEvent(eventArgs:any){

  }

}
