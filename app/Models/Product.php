<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    use HasUuids;

    protected $table = 'products';
    protected $primaryKey = 'id';
    public $incrementing = false;

    protected $fillable = [
        'name',
        'desc',
        'price',
        'stock',
        'have_variant',
        'main_product'
    ];
}
