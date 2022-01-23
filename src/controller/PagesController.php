<?php

require_once __DIR__ . '/Controller.php';
require_once __DIR__ . '/../model/Characteristics.php';
require_once __DIR__ . '/../model/Stories.php';
require_once __DIR__ . '/../model/Svgs.php';


class PagesController extends Controller {

  public function index() {
    $characteristics = Characteristics::all();
    $stories = Stories::all();
    $svgs = Svgs::All()->first();

    $this->set('characteristics', $characteristics);
    $this->set('stories', $stories);
    $this->set('svgs', $svgs);
  }
}
