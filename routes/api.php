<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



use App\Models\Car;

Route::get('/cars', function () {
    return Car::where('availability', true)->get();
});
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
