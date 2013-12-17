exports.index = function(req, res){
  res.render('main/crp-cms');
};

// $(document).ready(function() {
//     $('#add').addClass('current');
//     $('select>option:eq(0)').attr('selected', true);
// });

// $('.nav-link').click(function() {
//     var newPage = $(this).attr('href');
//     $('.current').fadeOut('slow').removeClass('current');
//     $(newPage).fadeIn('slow').addClass('current');
//     $('form').fadeIn('slow');
// });

// function selectChanged(val) {
//   if (val == 4) {
//     $('#mainImg').html('<p>Video Link:</p>');
//   } else {
//         $('#mainImg').html('<p>Full Image:</p>');
//     }
// }

// $('#add-form').submit(function(e) {
//      e.preventDefault();

//       if ($('#sel').val() !== '0' ) {
//         var empty = false;
//         var dataString = []; dataString[0] = $('#sel').val();
//         $('.formChecker .txtinput').each(function() {
//             if ($(this).val() == '' ) empty = true;
//             else if ($(this).val() !== "SUBMIT") dataString.push($(this).val());
//         });
//         if (!empty) {
//            $('.formField').fadeOut('slow');
//            var fs = require('fs');
//            fs.writeFile("newProj.json", dataString, function(err) {
//              if (err) {
//                 console.log(err);
//              } else {
//                 $('#formField').text("Completed.");
//              }
//             });
//         } else {
//             alert('Not all form fields completed.');
//             return false;
//         } // end empty if
//     } else {
//         alert('Please submit a project type.');
//         return false;
//     } // end sel if
// }); // end submit
