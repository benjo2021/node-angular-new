import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatTableDataSource, MatSort } from "@angular/material";
import { Router } from "@angular/router";
import { DatabaseService } from "../../services/database.service";
import alertify from "alertifyjs";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"],
})
export class UserListComponent implements OnInit {
  constructor(private db:DatabaseService, private router:Router){}
  users;
  ngOnInit(){
    this.getList();
  }
  getList(){
    console.log("this is a test");
    
    this.db.get("user").subscribe((data:any)=>{
      console.log(data);
      this.users = data;
    })
  }
}
