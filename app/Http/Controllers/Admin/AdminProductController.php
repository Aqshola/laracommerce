<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repository\product\ProductRepository;
use Inertia\Inertia;

class AdminProductController extends Controller
{

    private ProductRepository $productrepository;

    public function __construct(ProductRepository $productRepository)
    {
        $this->productrepository = $productRepository;
    }
    public function render()
    {
        $listProduct = $this->productrepository->getAllProduct();
        return Inertia::render('admin/Product/Index', [
            'listProduct' => $listProduct
        ]);
    }

    public function renderFormInput()
    {
        return Inertia::render('admin/Product/Add/Index');
    }
}
