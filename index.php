<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>The CRP Group CMS / Initialization Framework</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">

        <!-- faveIcon from parent -->

        <link rel="stylesheet" href="http://www.thecrpgroup.com/crpweb/promo-site/css/normalize.min.css">
        <link rel="stylesheet" href="init.css">
        <script src="http://www.thecrpgroup.com/crpweb/promo-site/js/vendor/modernizr-2.6.2.min.js"></script>


        <script type="text/javascript" src="//use.typekit.net/wsc5svy.js"></script>
        <script type="text/javascript">try{Typekit.load();}catch(e){}</script>
    
    </head>
    <body>
    <?php
        $mysqli = new mysqli("localhost", "drhall_crpUser", "test123", "drhall_crptest");
           if ($mysqli->connect_errno) {
             echo "Failed to connect to database: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
        }
        include('init.php');
    ?>

        <header>
            <img src="http://www.thecrpgroup.com/crpweb/promo-site/images/crp-logo.svg" class="head-logo">
            <nav>
                <ul>
                    <li><a class="nav-link" href="#add">ADD PROJECT</a></li>
                    <li>|</li>
                    <li><a class="nav-link" href="#update">UPDATE PROJECT</a></li>
                    <li>|</li>
                    <li><a class="nav-link" href="#remove">REMOVE PROJECT</a></li>
                    <li>|</li>
                    <li><a class="nav-link" href="#reorder">REORDER PROJECTS</a></li>
                    <li>|</li>
                    <li><a class="nav-link" href="http://www.thecrpgroup.com" target="_self">RETURN TO MAIN SITE</a></li>
                </ul>
            </nav>
        </header>

        <div id="wrapper">

            <div id="add">
                <h1>Add a project to the site.</h1>
                <p class="page-description">Add a totally new project. Please provide an unique title.<br /> Main Image should be 'XX' x 'XX' pixels. Full Image should be 'XX' x 'XX' pixels.</p>
                
                <section class="formField">
                    <form name="add-form" id="add-form" method="post" action="addNew.php">  
                        <ul class="formChecker">
                        
                            <li><p>Project Type:</p></li>
                            <li><select name="projectType" onchange="selectChanged(this.value)" id="sel">
                                <option value="0" selected="true">Select a project type</option>
                                <option value="1">Theatrical</option>
                                <option value="2">Home Entertainment</option>
                                <option value="3">Interactive Gaming</option>
                                <option value="4">AV & Web</option>
                            </select>
                            </li>


                            <li><p>Project Title:</p></li>
                            <li>
                                <input type="text" name="projectTitle" maxlength="75" id="title" tabindex="1" AUTOCOMPLETE = "OFF" class="txtinput">
                            </li> 
                            
                            <li><p>Main Image:</p></li>
                            <li>
                                <input type="file" name="mainImage" size="50" maxlength="100" id="main-image" AUTOCOMPLETE = "OFF" tabindex="2" class="txtinput">
                            </li>

                            <li id="mainImg"><p>Full Image:</p></li>
                            <li>
                                <input type="file" name="fullImage" size="50" maxlength="100" id="full-image" AUTOCOMPLETE = "OFF" tabindex="3" class="txtinput">
                            </li>
                            
                            <li><p>Client:</p></li>
                            <li>
                                <input type="text" name="clientName" maxlength="50" id="clientName" tabindex="4" AUTOCOMPLETE = "OFF" class="txtinput">
                            </li>
                            
                            <li><p>Project Description:</p></li>
                            <li>
                                <textarea rows="4" maxlength="255" type="text" name="description" tabindex="5" AUTOCOMPLETE = "OFF" class="txtinput"></textarea>
                            </li>
                            
                            <li><input type="submit" value="SUBMIT" name="add-submit" tabindex="6" class="submit-button" /></li>
                        </ul>
                    </form>
                </section> <!-- end formField -->
            </div> <!-- end #add -->
        
            <div id="update">
                <h1>Update a project on the site.</h1>
                <p class="page-description">Change information or images for an existing project. Choose a project from the list to see current details.</p>

                <section class="results-box">
                 <?php
                    list($th,$he,$ig,$ava) = buildArray($mysqli);
                    listTitles($th,$he,$ig,$ava);
                ?>
                </section>
            </div> <!-- end #update -->

            <div id="remove">
                <h1>Remove a project from the site.</h1>
                <p class="page-description">Completely remove a project. Choose a project from the list to see its details.</p>

                <section class="results-box">
                 <?php
                    list($th,$he,$ig,$ava) = buildArray($mysqli);
                    listTitles($th,$he,$ig,$ava);
                ?>
                </section>
            </div> <!-- end #remove -->

            <div id="reorder">
                <h1>Reorder a section.</h1>
                <p class="page-description">Reorganize the order that projects are listed per section.</p>
                <form>
                </form>
            </div> <!-- end #reorder -->

        </div> <!-- end wrapper -->

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="http://www.thecrpgroup.com/crpweb/promo-site/js/vendor/jquery-1.9.1.min.js"><\/script>')</script>

        <script>
            $(document).ready(function() {
                $('#add').addClass('current');
                $('select>option:eq(0)').attr('selected', true);
            });
            
            $('.nav-link').click(function() {
                var newPage = $(this).attr('href');
                $('.current').fadeOut('slow').removeClass('current');
                $(newPage).fadeIn('slow').addClass('current');
                $('form').fadeIn('slow');
            });

            function selectChanged(val) {
            	if (val == 4) {
            		$('#mainImg').html('<p>Video Link:</p>');
            	} else {
                    $('#mainImg').html('<p>Full Image:</p>');
                }
            }
            
            $('#add-form').submit(function(e) {
                 e.preventDefault();

                  if ($('#sel').val() !== '0' ) {
                    var empty = false;
                    var dataString = []; dataString[0] = $('#sel').val();
                    $('.formChecker .txtinput').each(function() {
                        if ($(this).val() == '' ) empty = true;
                        else if ($(this).val() !== "SUBMIT") dataString.push($(this).val());
                    });
                    console.log(dataString);
                    if (!empty) {
                       $('.formField').fadeOut('slow');
                       $.ajax( {
                        type: "POST",
                         url: "addNew.php",
                         data: dataString,
                         success: function(response){
                            
                            $('#formField').text("Completed.");
                            
                         }, // end success call back
                         error: function(error){
                            console.log(error);
                         }
                        }); // end ajax call
                    } else {
                        alert('Not all form fields completed.');
                        return false;
                    } // end empty if
                } else {
                    alert('Please submit a project type.');
                    return false;
                } // end sel if
            }); // end submit


        </script>
    </body>
</html>
