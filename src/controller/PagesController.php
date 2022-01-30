<?php

require_once __DIR__ . '/Controller.php';
require_once __DIR__ . '/../model/Characteristics.php';
require_once __DIR__ . '/../model/Stories.php';
require_once __DIR__ . '/../model/Svgs.php';
require_once __DIR__ . '/../model/Todays.php';


class PagesController extends Controller {

  public function index() {
    $characteristics = Characteristics::all();
    $stories = Stories::all();
    $svgs = Svgs::All()->first();
    $todays = Todays::All();

    $this->set('characteristics', $characteristics);
    $this->set('stories', $stories);
    $this->set('svgs', $svgs);
    $this->set('todays', $todays);
  }
}
