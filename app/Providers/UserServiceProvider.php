<?php

namespace App\Providers;

use App\Services\impl\AdminUserService;
use App\Services\impl\BuyerUserService;
use Illuminate\Support\ServiceProvider;
use Illuminate\Contracts\Support\DeferrableProvider;

class UserServiceProvider extends ServiceProvider implements DeferrableProvider
{
    public array  $singletons = [
        AdminUserService::class => AdminUserService::class
    ];

    public function provides(): array
    {
        return [AdminUserService::class];
    }
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
