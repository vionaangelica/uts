import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  private question;
  private inputNum;
  profpic = "https://www.mashbox.org/wp-content/uploads/2017/03/panda9.jpg";

  constructor() {
    this.question = Math.floor(Math.random() * 10) + 1;
    // alert(this.question)
  }

  ngOnInit(){
    document.getElementById('Profile').style.display = 'none';
  }

  check(){
    if (this.inputNum == this.question){
      document.getElementById('Profile').style.display = 'block';
      alert("Congratulations! You did it :D")
    }
    else{
      alert("It's not too late to try again!")
    }
  }
}
