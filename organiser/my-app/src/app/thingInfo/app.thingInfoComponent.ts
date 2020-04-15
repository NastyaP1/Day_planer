import { Component, OnInit } from "@angular/core";
import { TokenStorageService } from '../_services/token-storage.service';
import { ListToDo } from '../domens/listToDo';
import { ListToDoService } from '../services/listToDo.service';

@Component({
    selector: 'thingInfo',
    templateUrl: './thingInfo.html',
    styleUrls: ['./app.thingInfoComponent.css']
})
export class ThingInformComponent implements OnInit{

ngOnInit() {
    }    

}