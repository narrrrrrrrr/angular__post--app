import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "app-todo",
    templateUrl: "./todo.component.html",
    styleUrls: ["./todo.component.scss"]
})

export class TodoComponent{
    @Input() taskName!: any
    @Output() onDelete = new EventEmitter();
    @Output() onEditPost = new EventEmitter();

    newCategory!: string;
    newTitle!: string;
    newPlace!: string;


    editToggle = false

    currentId!: number;

    onDel(id: number){
        this.onDelete.emit(id)
    }

    onEd(id: number){
        this.editToggle = !this.editToggle
        this.currentId = id
    }
    
    closeBanner(){
        this.editToggle = !this.editToggle
    }

    onEdit(newCateg: string, newTitle: string, newPlace: string){
        this.onEditPost.emit({
            title: newTitle,
            place: newPlace,
            category: newCateg,
            id: this.currentId
        })
    }
}