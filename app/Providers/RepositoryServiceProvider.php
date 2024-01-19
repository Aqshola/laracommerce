<?php

namespace App\Providers;

use App\Repository\product\ProductRepository;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{

    public array $singletons = [
        ProductRepository::class => ProductRepository::class
    ];

    public function provides()
    {
        return [ProductRepository::class];
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
