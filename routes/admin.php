<?php

use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\admin\AdminLoginController;
use App\Http\Middleware\AdminRedirector;
use App\Http\Middleware\GuestAdminRedirector;
use Illuminate\Support\Facades\Route;

Route::prefix("admin")->group(function () {
    Route::get('/login', [AdminLoginController::class, 'render'])
        ->middleware([GuestAdminRedirector::class])
        ->name('view-login-admin');

    Route::get('/dashboard', [AdminDashboardController::class, 'render'])
        ->middleware([AdminRedirector::class])
        ->name('view-dashboard-admin');


    Route::post('/login', [AdminLoginController::class, 'login'])->name('post-login-admin');
    Route::post('/logout', [AdminLoginController::class, 'logout'])->name('post-logout-admin');
});
