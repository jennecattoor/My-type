<?php

require_once __DIR__ . '/Controller.php';
require_once __DIR__ . '/../model/Characteristics.php';
require_once __DIR__ . '/../model/Stories.php';


class PagesController extends Controller {

  public function index() {
    $characteristics = Characteristics::all();
    $stories = Stories::all();

    $this->set('characteristics', $characteristics);
    $this->set('stories', $stories);
  }
}
