<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Book;
use File;

class BooksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Book::truncate();

        $json = File::get("storage/app/public/JSBooksLight.json");
        $BookData = json_decode($json,true);
        foreach($BookData['Items'] as $Item) {
                $data = $Item['Item'];
                Book::create([
                "title" => $data['title'],
                "price" => $data['itemPrice'],
                "thumbnailURL" => $data['largeImageUrl'],
                "category" => 'JavaScript'
            ]);
        }
    }
}
