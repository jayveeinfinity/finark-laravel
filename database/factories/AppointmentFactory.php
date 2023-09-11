<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class AppointmentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'client_id' => $this->faker->numberBetween(1, 5),
            'service_plan_id' => $this->faker->numberBetween(1, 10),
            // 'appointment_date' => $this->faker->dateTimeBetween('+1 day', '+1 week')->format('Y-m-d'),
            'appointment_date' => $this->faker->date('Y-m-d'),
            'appointment_time' => $this->faker->numberBetween(10, 18) . ':00:00'
        ];
    }
}