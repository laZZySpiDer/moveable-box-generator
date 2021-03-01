import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-generator-box-container',
  templateUrl: './generator-box-container.component.html',
  styleUrls: ['./generator-box-container.component.scss']
})
export class GeneratorBoxContainerComponent implements OnInit {

  @ViewChild('newTestBox', { static: false }) testBox: ElementRef;
  private selectedBoxId: string = null;
  private idCount: number = -1;

  constructor(private renderer: Renderer2) { }
  ngOnInit() { }

  ngAfterViewInit() {
    
      window.addEventListener('keydown', (event: KeyboardEvent) => {
        if(this.selectedBoxId){
          const keycode = event.key;
          switch(keycode){
            case 'w' : {

              const {x, y} = this.renderer.selectRootElement(document.getElementById(this.selectedBoxId).getBoundingClientRect());
              const v = document.getElementById(this.selectedBoxId);
              v.style.top = y-1+'px';
              console.log('w');
              break;
            }
            case 'a' : {
              const {x, y} = this.renderer.selectRootElement(document.getElementById(this.selectedBoxId).getBoundingClientRect());
              const v = document.getElementById(this.selectedBoxId);
              v.style.left = x-1+'px';
              console.log('a');
              break;
            }
            case 's' : {
              const {x, y} = this.renderer.selectRootElement(document.getElementById(this.selectedBoxId).getBoundingClientRect());
              const v = document.getElementById(this.selectedBoxId);
              v.style.top = y+1+'px';
              console.log('s');
              break;
            }
            case 'd' : {
              const {x, y} = this.renderer.selectRootElement(document.getElementById(this.selectedBoxId).getBoundingClientRect());
              const v = document.getElementById(this.selectedBoxId);
              v.style.left = x+1+'px';
              console.log('d');
              break;
            }
            default : {console.log('no');break;}
          }
        }
      });
 
  }





  public boxClicked(idOfBox: string) {
    // check if any element is already selected and remove the selection from that box
    if (this.selectedBoxId) {
      this.renderer.setAttribute(this.renderer.selectRootElement(document.getElementById(this.selectedBoxId)), 'class', 'box');
    }

    // find the selected element and attach the class of selected box and also store the selectedID of box
    // for future use
    this.renderer.setAttribute(this.renderer.selectRootElement(document.getElementById(idOfBox)), 'class', 'box-selected');
    this.selectedBoxId = idOfBox;

  }


  public addBox() {
    this.idCount++;

    // create a box, attach a unique id, add a class, add z-index in inline css property
    // attach a listener to the element and at last append to the box-container.
    const newBox = this.renderer.createElement('div');
    this.renderer.setProperty(newBox, 'id', `newBox${this.idCount}`);
    this.renderer.setAttribute(newBox, 'class', 'box');
    this.renderer.setStyle(newBox, 'z-index', `${this.idCount}`);
    
    this.renderer.listen(newBox, 'click', (event) => { this.boxClicked((event.target as Element).id) });
   
    this.renderer.appendChild(this.testBox.nativeElement, newBox);
  }

}
