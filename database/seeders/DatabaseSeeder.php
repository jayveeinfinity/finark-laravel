<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        
        $this->call(PartnersSeeder::class);
        $this->call(PartnerGroupsTableSeeder::class);
        $this->call(PartnerGroupReferencesTableSeeder::class);
        $this->call(RoleSeeder::class);
        $this->call(ServicePlansSeeder::class);
        $this->call(UsersTableSeeder::class);
    }
}
