<?php

namespace App\Repository\product;

use App\Models\Product;
use Illuminate\Support\Facades\DB;

class ProductRepository implements ProductInterface
{

    public function getAllProduct()
    {

        $result = DB::table('products')->select(DB::raw("products.*, (
            select string_agg(products.name,',') from products as ps2
            where products.id = ps2.main_product
            ) as list_variant
            "))
            ->groupBy('id')
            ->get();

        return $result;
    }
}
