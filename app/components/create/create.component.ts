import { Component } from '@angular/core'
import { Router } from '@angular/router'


@Component({
    selector:"create",
    templateUrl:"./components/create/create.component.html",
    styleUrls:['./components/create/create.css']
})

export class CreateComponent{

    public numb:number = 1

    constructor(private route: Router){

    }

    onTap(){
        this.numb++
    }

    list(){
        this.route.navigate(["list"])
    }
}