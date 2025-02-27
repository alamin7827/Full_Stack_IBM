const student={
    name:"alamin",
    Marks:123,
    prop:this, //global scope
    getNmae: function(){
        console.log(this);
        return this.name;
    },
    getMarks: () =>{
        console.log(this); //parent scope ->window
        return this.Marks;

    },
    getinfo1: function(){
        setTimeout( () =>{
            console.log(this); //student
        },2000)

    },
    getinfo2: function(){
        setTimeout( function(){
            console.log(this); //window
        },2000)

    }

    

};
