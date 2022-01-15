<?php
use Illuminate\Database\Capsule\Manager as Capsule;
$capsule = new Capsule;
$capsule->addConnection([
 'driver'    => 'mysql',
 'host'      => getenv('PHP_DB_HOST') ?: 'ID338682_futura.db.webhosting.be',
 'database'  => getenv('PHP_DB_DATABASE') ?: 'ID338682_futura',
 'username'  => getenv('PHP_DB_USERNAME') ?: 'ID338682_futura',
 'password'  => getenv('PHP_DB_PASSWORD') ?: 'JpGp3Bn62NfAGB4W',
 'charset'   => 'utf8mb4',
 'collation' => 'utf8mb4_unicode_ci',
 'prefix'    => '',
]);
$capsule->setAsGlobal();
$capsule->bootEloquent();
