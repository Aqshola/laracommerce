<?php

use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\admin\AdminLoginController;
use Illuminate\Support\Facades\Route;

Route::prefix("admin")->group(function () {
    Route::get('/login', [AdminLoginController::class, 'render'])->name('view-login-admin');
    Route::get('/dashboard', [AdminDashboardController::class, 'render'])->name('view-dashboard-admin');

    Route::post('/login', [AdminLoginController::class, 'login'])->name('post-login-admin');
});
