<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Post;
use Faker\Generator as Faker;

$factory->define(Post::class, function (Faker $faker) {
    return [
        //
        'title' => $faker->sentence(3,true),
        'content' =>$faker->realText($faker->numberBetween(10,50))
    ];
});
