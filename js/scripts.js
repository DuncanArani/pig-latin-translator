// function TranslatePiglatin(string) {
//   var vowels = ["a", "e", "i", "o","u"],
//     results = string.split('');
//     console.log(results);
//
//   if (vowels.include(string[0])) {
//     return string += 'way';
//
//   } else {
//     for (var i = 0: i < string.length; i++) {
//       if (vowels.includes(string(i))) {
//         results.push(results.shift());
//
//       }else {
//         results.push('ay')
//         return results.join("");
//       }
//
//       }
//     }
//   }
//   console.log(results)
// }
// fucntion translation() {
// var delimiter = " ";
//     input = document.form.english.value;
//     tokens = input.split(delimiter);
//     output = [];
//     len = tokens.length;
//     i;
//
// for (i = 1; i<len; i++){
//     output.push(input[i]);
// }
// output.push(tokens[0]);
// output = output.join(delimiter);
// }
$(document).ready(function() {
  $(form).submit(function(event) {
    event.preventDefault();
    // alert("submit")
    var string = $("input#english").val();
    // alert(string)
    var latinWord = piglatin(string);
    $("p#display").text(latinWord)
  })
})

function piglatin(string) {
  var firstVowel = string.match(/[a,e,i,o,u,A,E,I,O,U]/);
  // console.log(firstVowel);
  var firstposition = string.indexOf(firstVowel);
  // console.log(firstpositon);
  if (firstposition > 0) {
    return string.slice(firstposition) + string.slice(0, firstposition) + "ay";

    console.log(result);


  } else {
    return string+"way"
  }


}
// piglatin("google")
