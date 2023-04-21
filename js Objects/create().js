let family={
    father:"Emmanuel Getange",
    mother:"Elizabeth Muthoni",
    daughter:"girl",
    son:"boy",

    display(){
        console.log("daughter:",this.daughter);
    },
    displaynew(){
        console.log("son:",this.son);
    }
};
let dtr=Object.create(family);
let sn=Object.create(family);

dtr.daughter="Babygirl";
sn.son="Babyboy";

dtr.display();
sn.displaynew();
