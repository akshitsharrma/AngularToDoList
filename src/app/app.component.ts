import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoApp';
  array:any[]=[];
  data='';

  output(data:string)
  {
    console.warn(data);
    this.array.push({id:this.array.length,name:data});
    //this.array.push(data)
    console.log(this.array)
  }
  remove(id:number)
  {
/*id=id-1;*/
    console.log(id);
    this.array.splice(id,1);
  }
}
