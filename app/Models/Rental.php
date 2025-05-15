<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Car;


class Rental extends Model
{
    public function user() {
    return $this->belongsTo(\App\Models\User::class);
}

public function car() {
    return $this->belongsTo(\App\Models\Car::class);
}

}
