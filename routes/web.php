<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Middleware\AuthMiddleware;
use App\Http\Middleware\GuestMiddleware;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index']);

Route::middleware([GuestMiddleware::class])->group(function () {
    Route::get('/login', [AuthController::class, 'page_login']);
    Route::post('/login', [AuthController::class, 'login']);
});

Route::middleware([AuthMiddleware::class])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index']);
});


Route::get('/s', function () {
    return response()->json([
        'session_id' => session()->getId(),
        'all' => session()->all(),
    ]);
});

Route::get('/d', function () {
    session()->flush();
    return redirect()->to('s');
});
