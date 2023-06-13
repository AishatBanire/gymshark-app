import { HttpClient } from "@angular/common/http";
import { Component, Injectable } from "@angular/core";
import { UserInfo } from "./user-info.model";
@Injectable()

@Component({
  selector: "gymshark-userinfo",
  templateUrl:"user-info.component.html"
})
export class UserInfoComponent{
  myInfo: UserInfo | undefined;

constructor(private http: HttpClient){

}

ngOnInit(): void{
console.log("sending data out");
this.getUserInfo();
console.log("registering showuserInfo")
this.showUserInfo();
}
getUserInfo(){
  return this.http.get<UserInfo>("https://gymshark-app-d3485-default-rtdb.firebaseio.com/my-info.json");

}

showUserInfo(){
  this.getUserInfo().subscribe((data: UserInfo) => {
    console.log(data);
    this.myInfo = data;

  })

}
}
