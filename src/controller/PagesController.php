<?php

require_once __DIR__ . '/Controller.php';
require_once __DIR__ . '/../model/Characteristics.php';


class PagesController extends Controller {

  public function index() {
    $characteristics = Characteristics::all();

    $this->set('characteristics', $characteristics);
  }
}
