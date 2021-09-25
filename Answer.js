class Answer {

    constructor(){

        this.access1 = createInput("Code1")
        this.access1.position(100,90);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(100,120);
        this.button1.style('background', 'lightgrey');    

        this.access2 = createInput("Code1")
        this.access2.position(700,190);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Check');
        this.button2.position(700,220);
        this.button2.style('background', 'lightgrey');

        this.access3 = createInput("Code1")
        this.access3.position(100,290);
        this.access3.style('background', 'white');  

        //Debug the code to create the third button.
        this.button3 = createButton('Check');
        this.button3.position(100,320);
        this.button3.style('background', 'lightgrey'); 

        this.access4 = createInput("Code1")
        this.access4.position(700,370);
        this.access4.style('background', 'white');  

        this.button4 = createButton('Check');
        this.button4.position(697,400);
        this.button4.style('background', 'lightgrey');  

        this.access5 = createInput("Code1")
        this.access5.position(80,500);
        this.access5.style('background', 'white');  

        this.button5 = createButton('Check');
        this.button5.position(80,530);
        this.button5.style('background', 'lightgrey');  

        this.access6 = createInput("Code1")
        this.access6.position(1300,300);
        this.access6.style('background', 'white');  

        this.button6 = createButton('Check');
        this.button6.position(1300,270);
        this.button6.style('background', 'lightgrey');  

        this.access7 = createInput("Code1")
        this.access7.position(1080,460);
        this.access7.style('background', 'white');  

        this.button7 = createButton('Check');
        this.button7.position(1080,420);
        this.button7.style('background', 'lightgrey');  
    }

    display(){

        this.button1.mousePressed(() => {
            if(question.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });

        this.button2.mousePressed(() => {
            if(question.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });

        // On mousePressed, check the input condition. 
        this.button3.mousePressed(() => {
            if(question.authenticate(accessCode3,this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                score++;
            }
        });

        this.button4.mousePressed(() => {
            if(question.authenticate(accessCode4,this.access4.value())){
                this.button4.hide();
                this.access4.hide();
                score++;
            }
        });

        this.button5.mousePressed(() => {
            if(question.authenticate(accessCode5,this.access5.value())){
                this.button5.hide();
                this.access5.hide();
                score++;
            }
        });

        this.button6.mousePressed(() => {
            if(question.authenticate(accessCode6,this.access6.value())){
                this.button6.hide();
                this.access6.hide();
                score++;
            }
        });

        this.button7.mousePressed(() => {
            if(question.authenticate(accessCode7,this.access7.value())){
                this.button7.hide();
                this.access7.hide();
                score++;
            }
        });




    }
}