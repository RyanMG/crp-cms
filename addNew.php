<?php

$projectType = $_POST['projectType'];
$projectTitle = $_POST['projectTitle'];
$mainImage = $_POST['mainImage'];
$fullImage = $_POST['fullImage'];
$clientName = $_POST['clientName'];
$description = $_POST['description'];

echo $projectType;

switch($projectType) {
      case 1:
        $query = "INSERT INTO theatrical (ID, projectTitle, mainImage, fullImage, clientName, description, dateEntered)VALUES ('NULL', '".$projectTitle."', '".$mainImage."', '".$fullImage."', '".$clientName."', '".$description."', '".$dateEntered."')";
        $mysqli->query($query) or die ('Error updating theatrical database.');
        return '<h1 style="padding-top:90px;">Database Updated With: '.$projectTitle ;
        break;
      case 2:
        $query = "INSERT INTO homeEnt (ID, projectTitle, mainImage, fullImage, clientName, description, dateEntered)VALUES ('NULL', '".$projectTitle."', '".$mainImage."', '".$fullImage."', '".$clientName."', '".$description."', '".$dateEntered."')";
        $mysqli->query($query) or die ('Error updating database.');
        return '<h1 style="padding-top:90px;">Database Updated With: '.$projectTitle ;
        break;
      case 3:
        $query = "INSERT INTO gaming (ID, projectTitle, mainImage, fullImage, clientName, description, dateEntered)VALUES ('NULL', '".$projectTitle."', '".$mainImage."', '".$fullImage."', '".$clientName."', '".$description."', '".$dateEntered."')";
        $mysqli->query($query) or die ('Error updating database.');
        return '<h1 style="padding-top:90px;">Database Updated With: '.$projectTitle ;
        break;
      case 4:
        $query = "INSERT INTO avweb (ID, projectTitle, mainImage, fullImage, clientName, description, dateEntered)VALUES ('NULL', '".$projectTitle."', '".$mainImage."', '".$fullImage."', '".$clientName."', '".$description."', '".$dateEntered."')";
        $mysqli->query($query) or die ('Error updating database.');
        return '<h1 style="padding-top:90px;">Database Updated With: '.$projectTitle ;
        break;
      default:
        return 'Invalid project type.';
        break;
}

?>