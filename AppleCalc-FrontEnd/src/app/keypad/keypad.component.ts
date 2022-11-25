import { Component, OnInit } from '@angular/core';
import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
@Injectable()
export class KeypadComponent implements OnInit {

  private x : string = "";
  private op : string = "";
  private y : string = "";
  private bin : boolean = false;
  private clicked : boolean = false;


  print(num:string) {
    let out = document.getElementById('display1')!.innerText
    if (out == "E") document.getElementById('display1')!.innerText = ""
    if ((num == "+" || num == "-" || num == "×" || num == "÷") && (out.endsWith("+") || out.endsWith("-") || out.endsWith("×") || out.endsWith("÷"))) {
      document.getElementById('display1')!.innerText = document.getElementById('display1')!.innerText.slice(0,-1)
    }
    if (num == "0" && out == "0") return
    if (num == "." ) {
      if (out.endsWith(".")) return
      else if (out == "") {
        document.getElementById('display1')!.innerText += "0."
        return
      }
    }
    if (num == 'C') {
      document.getElementById('display1')!.innerText = ''
      document.getElementById('display2')!.innerText = ''
    }
    else if (num == '⌫') {
      document.getElementById('display1')!.innerText = document.getElementById('display1')!.innerText.slice(0,-1)
    }
    else if (num == '=') {
      document.getElementById('display2')!.innerText = document.getElementById('display1')!.innerText
    }
    else document.getElementById('display1')!.innerText += num
  }

  add() {
    this.bin = true;
    this.op = "add";
    if (this.clicked) this.x = document.getElementById('display1')!.innerText.slice(0,-1)
    else this.x = document.getElementById('display1')!.innerText
    this.clicked = true;
  }
  sub() {
    this.bin = true;
    this.op = "sub";
    if (this.clicked) this.x = document.getElementById('display1')!.innerText.slice(0,-1)
    else this.x = document.getElementById('display1')!.innerText
    this.clicked = true;
  }
  multiply() {
    this.bin = true;
    this.op = "multiply";
    if (this.clicked) this.x = document.getElementById('display1')!.innerText.slice(0,-1)
    else this.x = document.getElementById('display1')!.innerText
    this.clicked = true;
  }
  divide() {
    this.bin = true;
    this.op = "divide";
    if (this.clicked) this.x = document.getElementById('display1')!.innerText.slice(0,-1)
    else this.x = document.getElementById('display1')!.innerText
    this.clicked = true;
  }
  percent() {
    this.bin = false;
    this.op = "percent";
    if (this.clicked) this.x = document.getElementById('display1')!.innerText.slice(0,-1)
    else this.x = document.getElementById('display1')!.innerText
    this.clicked = false
  }
  sign() {
    this.bin = false;
    this.op = "sign";
    if (this.clicked) this.x = document.getElementById('display1')!.innerText.slice(0,-1)
    else this.x = document.getElementById('display1')!.innerText
    this.clicked = false
  }
  squared() {
    this.bin = false;
    this.op = "squared";
    if (this.clicked) this.x = document.getElementById('display1')!.innerText.slice(0,-1)
    else this.x = document.getElementById('display1')!.innerText
    this.clicked = false
  }
  sqrt() {
    this.bin = false;
    this.op = "sqrt";
    if (this.clicked) this.x = document.getElementById('display1')!.innerText.slice(0,-1)
    else this.x = document.getElementById('display1')!.innerText
    this.clicked = false
  }
  reciprocal() {
    this.bin = false;
    this.op = "reciprocal";
    if (this.clicked) this.x = document.getElementById('display1')!.innerText.slice(0,-1)
    else this.x = document.getElementById('display1')!.innerText
    this.clicked = false
  }

  eval() {
    if (this.bin) {
      if (this.clicked) {
        this.y = document.getElementById('display1')!.innerText.replace(this.x,"").substring(1);
      }
      this.http.get(`http://localhost:8080/calc/${this.x}/${this.op}/${this.y}`).subscribe(
        response => {
          if (response == null) document.getElementById('display1')!.innerText = "E"
          else document.getElementById('display1')!.innerText = response.toString()
          this.clicked = false;
        }
      )
    }
    else {
      this.http.get(`http://localhost:8080/calc/${this.x}/${this.op}`).subscribe(
        response => {
          if (response == null) document.getElementById('display1')!.innerText = "E"
          else document.getElementById('display1')!.innerText = response.toString()
        }
      )
    }
  }

  constructor(private http: HttpClient){}

  ngOnInit(): void {}

}
