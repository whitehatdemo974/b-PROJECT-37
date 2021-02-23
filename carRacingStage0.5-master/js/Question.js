class Question {
  constructor() {
    this.input=createInput("name");
    this.button=createButton("play");
    this.question=createElement('h3');
    this.o1=createElement('h3');
    this.o2=createElement('h3');
    this.o3=createElement('h3');
    this.o4=createElement('h3');
    this.title=createElement('h2');
  }
hide(){
  this.question.hide();
  this.input.hide();
  this.button.hide();
  this.o1.hide();
  this.o2.hide();
  this.o3.hide();
  this.o4.hide();
  this.title.hide();

}
  display(){
     
    this.title.html("My Quiz Game");
    title.position(350, 0);
    
    this.question.html("Question:- What starts and ends with 'E', but has only one letter? ");
    this.question.position(150, 180);
    this.o1.html("1: Everyone");
    this.o1.position(150,100);
      this.o2.html("2: Envelope");
      this.o2.position(150, 120);
      
      this.input1.position(150, 230);
      
    }

  }

