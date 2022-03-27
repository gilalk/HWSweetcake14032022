import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Cake {
  cakeName:string;
  cakeType:string;
  tags:string;
}
@Component({
  selector: 'app-sweet-cake',
  templateUrl: './sweet-cake.component.html',
  styleUrls: ['./sweet-cake.component.css']
})
export class SweetCakeComponent implements OnInit {

  cake:Cake = {
    cakeName: '',
    cakeType: '',
    tags: ''
  };
  tagsArr: string[] = [];
  isItCarrotCake:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit(formData: any){
    this.cake = formData;
    if(this.cake.tags === ''){
      this.tagsArr = [];
    }else{
    this.tagsArr = this.cake.tags.split(",");
    }

    if(this.cake.cakeType === 'Carrot'){
      this.isItCarrotCake = true;
    }else{
      this.isItCarrotCake = false;
    }
    console.log(this.cake);
    console.log(this.tagsArr);
  }
}
