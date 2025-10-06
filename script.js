//Vlera fillestare
//Kushti               <-- Rregulla te for loopit
//Rritja / Iterimi

// for(var i = 10; i >= 1; i--) {
//     console.log("push ups:", i);
// }



// for(var i = 0; i <= 10; i++) {
//     if(i === 5) {
//         //break;                    
//         continue;
//     }

//     console.log(i)
// }


// var i = 0;
// while(i < 3) {
//     console.log(i);      // while loop
//     i++;
// }


// for(var i = 0; i <= 20; i++) {
//     console.log(i);
// }

// for(var i = 3; i <= 29; i++) {
//     if (i % 2 !== 1) {
//         console.log(i)
//     }
// }

// for(var i = 12; i >= -14; i--) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }


// for(var i = 0; i <= 50; i++) {

//     console.log(i + i)
// }

// var frutat = ["molla", "dardha", "banana", "kivi"]

// for(var i = 0; i < frutat.length; i++) {
//     console.log(frutat[i    ])
// }


var myPassword = "bind1234";
var enterPassword = prompt("shkruani passwordin: ");

while(enterPassword !== myPassword) {
    enterPassword = prompt("Passwordi nuk eshte i sakte, provo perseri")

    if(enterPassword === null) {
        alert("Password entry cancelled");
        break
    }

}

if (enterPassword === myPassword) {
    alert("welcome")
}    