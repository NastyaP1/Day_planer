import { Component, OnInit, ViewChild, ElementRef, NgZone, Input, Output, EventEmitter, Injectable } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { DataService } from 'src/app/services/data.service';
import { User } from 'src/app/domens/user';
import { HttpService } from '../services/http.service';
import { Thing } from '../domens/thing';
import { ThingService } from '../services/thingService';

@Component({
  templateUrl: './profilePage.html',
  styleUrls: ['./app.profilePageComponent.scss'],
  providers: [DataService]
})
@Injectable()
export class ProfilePageComponent implements OnInit {

  userFromBack;
  responseText;
  thing;
  responseThing;
  things:Thing[];

  constructor(
    private data: DataService,
    private httpService: HttpService,
    private thingService:ThingService
    ) { }

  ngOnInit() {
    const con = new XMLHttpRequest();
    con.open('GET', 'http://localhost:8182/api/user/', false);

    const header = this.data.updateAndGetAuthHeader('GET', 'api/user/');

    console.log(header);

    con.setRequestHeader('Authorization', header);

    con.send();

    if (con.status === 200) {
      this.userFromBack = con.responseText;
      this.responseText =  JSON.parse(this.userFromBack);
      console.log('OK \n' + this.userFromBack);
    }
    else {
      console.log("smth wrong");
    }
    this.thingService.getAll().subscribe(data =>{this.things = data;});

   
  }


  public getAllThing(){
    //this.thingService.getAll().subscribe(data =>{this.things = data;});
    console.log("things" + this.things);
    if (this.things){
      console.log(this.things[0]);
    }
    /*const cont = new XMLHttpRequest();
    console.log(this.responseText.id);
    cont.open('GET', 'http://localhost:8182/api/user/'+ this.responseText.id +'/things/', false);
    //cont.setRequestHeader('Content-Type','application/json');
    //cont.responseType = "text";
    cont.send();
    //if (cont.status === 200) {
      this.thing = cont.response;
      this.responseThing =  JSON.parse(this.thing);
      console.log('OK \n' + this.thing);
    //}
    //else {
      console.log("can't get things");
   // }*/
  }

  // user: User = new User("", "Иван", "Москва", "ivan@gmail.com", 89515555555, "", "", "ivan01", "hhhh");

  // constructor(){
  //   private mapsAPILoader: MapsAPILoader,
  //   private ngZone: NgZone,
  //   private dataSer: DataService,
  //   private http: HttpClient,
  //   private httpService: HttpService
  // }
  // ngOnInit() {

  // }

  // showWay(){
  //   var ph = [];
  //   this.way.points.forEach(p => {
  //     this.getDetails(p.placeId);
  //   });
  //   //this.data.changePhotos(ph);
  // }

  // public getDetails(placeId: string){
  //   this.httpService.getData(placeId).subscribe( value =>{
  //     //var loc = {lat:value['result']['geometry']['location']['lat'],lng: value['result']['geometry']['location']['lng'], zoom: 15, placeId: value['result']['place_id'],  choose: false};
  //     var phot = value['result']['photos'];
  //     var name = value['result']['name'];
  //     var address = value['result']['formatted_address'];
  //     var rating = value['result']['rating'];
  //     var types = value['result']['types'];
  //     var number = value['result']['international_phone_number'];

  //     this.index = 0;
  //     var ref = []
  //     phot.forEach(ph => {
  //       ref.push(ph['photo_reference']);
  //     });

  //     var photoRes = [];
  //       ref.forEach(ph => {
  //         photoRes.push('https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference='+ph+'&key=AIzaSyBMgGGii-qFTTx5Obv-gwHljLtZbt8fAbQ')
  //       });
  //     //console.log(value['result']['place_id']);
  //     this.data.push({photo: photoRes[0],name: name,address: address,index: this.index, isAdded: true});
  //     this.photos.push(photoRes);
  //     this.number.push(number);
  //     this.rating.push(rating);
  //     this.types.push(types);
  //   });
  // }
}
