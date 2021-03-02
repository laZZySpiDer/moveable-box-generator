import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-generator-box-container',
  templateUrl: './generator-box-container.component.html',
  styleUrls: ['./generator-box-container.component.scss']
})
export class GeneratorBoxContainerComponent implements OnInit {

  @ViewChild('newTestBox', { static: false }) testBox: ElementRef;
  private selectedBoxId: string = null;
  private idCount: number = -1;
  public keyEvents : boolean = true;
  x: number=0;
  y:number=0;
  width: number=0;
  height: number=0;

  constructor(private renderer: Renderer2) { }
  ngOnInit() { }

  ngAfterViewInit() {
   const{x,y,width,height} = this.testBox.nativeElement.getBoundingClientRect();
   this.x = x-2;
   this.y = y+1;
   this.width = width-2;
   this.height = height-2;
   console.log(x+' - '+y+' w ='+width+' h='+height);

      window.addEventListener('keydown', (event: KeyboardEvent) => {

        if(!this.keyEvents){
          event.preventDefault();
          return;
        }

        if(this.selectedBoxId){
          const keycode = event.key;
          switch(keycode){
            case 'w' : {
              
              // const {x, y} = this.renderer.selectRootElement(document.getElementById(this.selectedBoxId).getBoundingClientRect());
              
              
              const v = document.getElementById(this.selectedBoxId);
              const {x,y} = v.getBoundingClientRect() as DOMRect;
              console.log(this.x+' - '+this.y);
              console.log(x+ '--' +y);

              if(this.y >= y){
                return;
              }
              v.style.top =  v.style.top ? parseFloat(v.style.top)-1+'px' : 0+'px';   
              console.log('w');
              break;
            }
            case 'a' : {
             
              const v = document.getElementById(this.selectedBoxId);
              const {x,y} = v.getBoundingClientRect() as DOMRect;
              if(this.x >= x){
                return;
              }
              v.style.left = v.style.left ?  parseFloat(v.style.left)-1+'px' : 0+'px';
              console.log('a');
              break;
            }
            case 's' : {
              // const {x, y} = this.renderer.selectRootElement(document.getElementById(this.selectedBoxId).getBoundingClientRect());
              const v = document.getElementById(this.selectedBoxId);
              const {x,y,width,height} = v.getBoundingClientRect() as DOMRect;
              if((this.y+this.height) <= (y+height)){
                return;
              }
              v.style.top = v.style.top ? parseFloat(v.style.top)+1+'px' : 0+'px';
              console.log('s');
              break;
            }
            case 'd' : {
              // const {x, y} = this.renderer.selectRootElement(document.getElementById(this.selectedBoxId).getBoundingClientRect());
              const v = document.getElementById(this.selectedBoxId);
              const {x,y,width,height} = v.getBoundingClientRect() as DOMRect;

              if((this.x+this.width) <= (x+width)){
                return;
              }
              v.style.left = v.style.left ? parseFloat(v.style.left)+1+'px' : 0+'px';
              console.log('d');
              break;
            }
            case 'Delete' : {
              console.log('Delete is pressed');
              if(this.testBox.nativeElement.childNodes.length <= 0){
                return;
              }
              const elementToBeDeleted = this.selectedBoxId;

              if(this.renderer.nextSibling(
                this.renderer.selectRootElement(document.getElementById(this.selectedBoxId))
                )){
                  this.selectedBoxId = this.renderer.nextSibling(this.renderer.selectRootElement(document.getElementById(this.selectedBoxId))).id;
                  this.boxClicked(this.selectedBoxId);
                }else{
                  this.selectedBoxId = this.testBox.nativeElement.childNodes[0].id;
                  this.boxClicked(this.selectedBoxId);
                }

              this.renderer.removeChild(
                this.testBox.nativeElement,
                this.renderer.selectRootElement(document.getElementById(elementToBeDeleted))
              );
              
              break;
            }
            default : {console.log('no');break;}
          }
        }else{
          alert('Please select a box');
        }
      });
 
  }





  public boxClicked(idOfBox: string) {
    // check if any element is already selected and remove the selection from that box
    if (this.selectedBoxId) {
      // this.renderer.setAttribute(this.renderer.selectRootElement(document.getElementById(this.selectedBoxId)), 'class', 'box');
    const obj = document.getElementById(this.selectedBoxId);
    obj.className = 'box';
    }

    // find the selected element and attach the class of selected box and also store the selectedID of box
    // for future use
    const newObj = document.getElementById(idOfBox);
    newObj.className = 'box-selected';

    // this.renderer.setAttribute(this.renderer.selectRootElement(document.getElementById(idOfBox)), 'class', 'box-selected');
    this.selectedBoxId = idOfBox;

  }


  public addBox() {
    this.idCount++;
    if(this.idCount >=100){
      alert('cannot add more boxes');
    }
    // create a box, attach a unique id, add a class, add z-index in inline css property
    // attach a listener to the element and at last append to the box-container.
    const newBox = this.renderer.createElement('div');
    // const newText = this.renderer.createText(`${this.idCount}`);
    newBox.innerHTML = this.idCount;
    // this.renderer.appendChild(newBox,newText);
    this.renderer.setProperty(newBox, 'id', `newBox${this.idCount}`);
    this.renderer.setAttribute(newBox, 'class', 'box');
    this.renderer.setStyle(newBox, 'z-index', `${this.idCount}`);
    
    this.renderer.listen(newBox, 'click', (event) => { this.boxClicked((event.target as Element).id) });
   
    this.renderer.appendChild(this.testBox.nativeElement, newBox);
  }

}
