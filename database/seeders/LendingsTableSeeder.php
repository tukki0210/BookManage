<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LendingsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $param = [
            'book_id' => 1,
            'user_id' => 1,
            'Lended Date' => '2021-12-1',
            'Return Date' => '2021-12-15',
            'isReturned' => true
        ];
        DB::table('lendings')->insert($param);
    }
}
