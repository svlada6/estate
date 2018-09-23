<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Vladimir',
            'email' => '1@1.rs',
            'password' => bcrypt('1'),
        ]);
    }
}
