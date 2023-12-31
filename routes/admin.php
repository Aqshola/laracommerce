<?php

use App\Http\Controllers\admin\AdminLoginController;
use Illuminate\Support\Facades\Route;

Route::prefix("admin")->group(function () {
    Route::get('/login', [AdminLoginController::class, 'render'])->name('view-login-admin');
});
