import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("stops").del();

    // Inserts seed entries
    await knex("stops").insert([
        
    ]);
};
