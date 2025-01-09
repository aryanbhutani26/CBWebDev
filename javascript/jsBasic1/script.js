console.log('Hi');

let naam = 'Aryan';

console.log(naam);

let child=()=>{
    console.log('first')
}

// call()

let parent =()=>{
    console.log('second');
    call=()=>{
        console.log('Hello');
        
    };
    
}
parent(child())(call());
child(parent());
