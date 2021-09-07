import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  toggle = false

  category: string = "Select category";
  title!: string;
  place!: string;

  tasks: any[] = [];

  now: Date = new Date();
  
  priv = this.tasks.filter(item => item.category === "Private").length

  setToggle(){
    this.toggle = !this.toggle;
  }

  onAdd(title: string, place: string, category: string){
    this.tasks.push({
      title: title,
      place: place,
      category: category,
      id: Math.random()
    })
    this.title = "";
    this.place = "";
    this.category = "";
    this.toggle = !this.toggle;
  }

  ngOnInit(){
  }
  
  public getLengthPriv(){
    return this.tasks.filter(todo => todo.category === "Private").length;
  }

  public getLengthBus(){
    return this.tasks.filter(todo => todo.category === "Bussines").length;
  }
  
  deleteFnc(id: number){
    this.tasks = this.tasks.filter(item => id !== item.id);
  }

  editFunc(newObj:any){
    const id = newObj.id;
    const changeableId = this.tasks.findIndex(item => item.id === id);
    this.tasks.splice(changeableId, 1, newObj)
  }

}
