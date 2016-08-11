<?php

 header('Access-Control-Allow-Origin: *');  
 header('Content-Type: application/json');

echo '{
  "data": [
    { "id": "1", "name": "Windstorm" },
    { "id": "2", "name": "Bombasto" },
    { "id": "3", "name": "Magneta" },
    { "id": "4", "name": "Tornado" }
  ]
}';

/**
 * This will  return valid json response;
 * The header accept all type of request
 */