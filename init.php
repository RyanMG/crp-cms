<?php

function buildArray($mysqli) {
    $theat = $mysqli->query("SELECT * FROM theatrical ORDER BY projectTitle ASC");
    $homeEnt = $mysqli->query("SELECT * FROM homeEnt ORDER BY projectTitle ASC");
    $gaming = $mysqli->query("SELECT * FROM gaming ORDER BY projectTitle ASC");
    $av = $mysqli->query("SELECT * FROM avweb ORDER BY projectTitle ASC");
    $theat->data_seek(0); $homeEnt->data_seek(0); $gaming->data_seek(0); $av->data_seek(0);
    $th = array(); $he = array(); $ig = array(); $ava = array();

    while ($row = $theat->fetch_assoc()) {
           $th[$row['ID']]['projectTitle'] = $row['projectTitle'];
           $th[$row['ID']]['mainImage']=$row['mainImage'];
           $th[$row['ID']]['fullImage']=$row['fullImage'];
           $th[$row['ID']]['clientName']=$row['clientName'];
           $th[$row['ID']]['description']=$row['description'];
           $th[$row['ID']]['dateEntered']=$row['dateEntered'];
    }

    while ($row = $homeEnt->fetch_assoc()) {
           $he[$row['ID']]['projectTitle'] = $row['projectTitle'];
           $he[$row['ID']]['mainImage']=$row['mainImage'];
           $he[$row['ID']]['fullImage']=$row['fullImage'];
           $he[$row['ID']]['clientName']=$row['clientName'];
           $he[$row['ID']]['description']=$row['description'];
           $he[$row['ID']]['dateEntered']=$row['dateEntered'];
    }
    while ($row = $gaming->fetch_assoc()) {
           $ig[$row['ID']]['projectTitle'] = $row['projectTitle'];
           $ig[$row['ID']]['mainImage']=$row['mainImage'];
           $ig[$row['ID']]['fullImage']=$row['fullImage'];
           $ig[$row['ID']]['clientName']=$row['clientName'];
           $ig[$row['ID']]['description']=$row['description'];
           $ig[$row['ID']]['dateEntered']=$row['dateEntered'];
    }
    while ($row = $av->fetch_assoc()) {
           $ava[$row['ID']]['projectTitle'] = $row['projectTitle'];
           $ava[$row['ID']]['mainImage']=$row['mainImage'];
           $ava[$row['ID']]['fullImage']=$row['fullImage'];
           $ava[$row['ID']]['clientName']=$row['clientName'];
           $ava[$row['ID']]['description']=$row['description'];
           $ava[$row['ID']]['dateEntered']=$row['dateEntered'];
    }
    return array($th,$he,$ig,$ava);
}

function listTitles($th,$he,$ig,$ava) {
    echo "<h2>THEATRICAL</h2>";
    foreach ($th as $row ) { echo '<a href="#"><p class="results-text">'.$row['projectTitle'].'</p></a>'; }
    echo "<h2>HOME ENTERTAINMENT</h2>";
    foreach ($he as $row ) { echo '<a href="#"><p class="results-text">'.$row['projectTitle'].'</p></a>'; }
    echo "<h2>GAMING</h2>";
    foreach ($ig as $row ) { echo '<a href="#"><p class="results-text">'.$row['projectTitle'].'</p></a>'; }
    echo "<h2>AV / WEB</h2>";
    foreach ($ava as $row ) { echo '<a href="#"><p class="results-text">'.$row['projectTitle'].'</p></a>'; }
}

?>