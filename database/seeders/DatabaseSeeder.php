<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $this->call(BooksTableSeeder::class);
        $this->call(LendingsTableSeeder::class);
        $this->call(UsersTableSeeder::class);
    }
}
